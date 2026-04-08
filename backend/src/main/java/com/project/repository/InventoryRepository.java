package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<com.project.entity.Order, Long> {

    @Modifying
    @Query(value = "UPDATE products SET stock = stock - :qty WHERE id = :productId AND stock >= :qty", nativeQuery = true)
    int reduceStock(@Param("productId") Long productId, @Param("qty") Integer qty);
}
