package com.project.service;

import com.project.dto.OrderItemRequest;
import com.project.dto.OrderRequest;
import com.project.entity.Order;
import com.project.entity.OrderItem;
import com.project.repository.CartRepository;
import com.project.repository.InventoryRepository;
import com.project.repository.OrderItemRepository;
import com.project.repository.OrderRepository;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final InventoryRepository inventoryRepository;
    private final CartRepository cartRepository;

    @Transactional
    public Order placeOrder(OrderRequest request) {
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setStatus("PLACED");
        order.setCreatedAt(LocalDateTime.now());

        double total = request.getItems().stream()
                .mapToDouble(i -> i.getPrice() * i.getQuantity())
                .sum();
        order.setTotalAmount(total);

        Order savedOrder = orderRepository.save(order);

        for (OrderItemRequest itemRequest : request.getItems()) {
            int updated = inventoryRepository.reduceStock(itemRequest.getProductId(), itemRequest.getQuantity());
            if (updated == 0) {
                throw new IllegalArgumentException("Not enough stock for productId=" + itemRequest.getProductId());
            }

            OrderItem item = new OrderItem();
            item.setOrderId(savedOrder.getId());
            item.setProductId(itemRequest.getProductId());
            item.setQuantity(itemRequest.getQuantity());
            item.setPrice(itemRequest.getPrice());
            orderItemRepository.save(item);
        }

        cartRepository.clearItemsByUserId(request.getUserId());

        return savedOrder;
    }

    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Order not found: " + id));
    }
}
