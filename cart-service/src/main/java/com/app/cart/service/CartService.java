package com.app.cart.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.cart.dto.CartItemRequest;
import com.app.cart.entity.Cart;
import com.app.cart.entity.CartItem;
import com.app.cart.repository.CartItemRepository;
import com.app.cart.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepo;

    @Autowired
    private CartItemRepository itemRepo;

    public Cart getCart(Long userId) {
        return cartRepo.findByUserId(userId);
    }

    public Cart addItem(Long userId, CartItemRequest req) {
        Cart cart = cartRepo.findByUserId(userId);

        if (cart == null) {
            cart = new Cart();
            cart.setUserId(userId);
            cart = cartRepo.save(cart);
        }

        CartItem item = new CartItem();
        item.setProductId(req.productId);
        item.setQuantity(req.quantity);
        item.setPrice(req.price);
        item.setCart(cart);

        itemRepo.save(item);
        return cartRepo.findByUserId(userId);
    }

    public Cart updateItem(Long itemId, int quantity) {
        CartItem item = itemRepo.findById(itemId).orElseThrow();
        item.setQuantity(quantity);
        itemRepo.save(item);
        return item.getCart();
    }

    public void deleteItem(Long itemId) {
        itemRepo.deleteById(itemId);
    }
}
