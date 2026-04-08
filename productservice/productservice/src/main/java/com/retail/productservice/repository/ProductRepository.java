package com.retail.productservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.retail.productservice.entity.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(Long categoryId);
}