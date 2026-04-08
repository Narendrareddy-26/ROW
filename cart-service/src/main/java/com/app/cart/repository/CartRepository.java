package com.app.cart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.cart.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Cart findByUserId(Long userId);
}
