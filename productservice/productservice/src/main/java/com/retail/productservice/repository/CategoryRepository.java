package com.retail.productservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.retail.productservice.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}