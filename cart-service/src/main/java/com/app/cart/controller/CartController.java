package com.app.cart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.cart.dto.CartItemRequest;
import com.app.cart.entity.Cart;
import com.app.cart.service.CartService;
@RestController
@RequestMapping("/api/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService service;

    private Long userId = 1L; 
    @GetMapping
    public Cart getCart() {
        return service.getCart(userId);
    }

    @PostMapping("/items")
    public Cart addItem(@RequestBody CartItemRequest req) {
        return service.addItem(userId, req);
    }

    @PutMapping("/items/{itemId}")
    public Cart updateItem(@PathVariable Long itemId,
                           @RequestParam int quantity) {
        return service.updateItem(itemId, quantity);
    }

    @DeleteMapping("/items/{itemId}")
    public void deleteItem(@PathVariable Long itemId) {
        service.deleteItem(itemId);
    }
}