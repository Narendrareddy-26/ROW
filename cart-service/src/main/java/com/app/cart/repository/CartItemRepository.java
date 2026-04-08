package com.app.cart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.cart.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
