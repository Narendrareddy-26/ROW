# ROW - Person 4 (Order + Admin Module)

This workspace now contains a simple, demo-friendly implementation for Person 4:

- Backend: Spring Boot (Order + Admin APIs)
- Frontend: React (Order page, Order history, Admin dashboard)

## Folder Layout

backend/
- pom.xml
- src/main/java/com/project/
	- controller/
		- OrderController.java
		- AdminController.java
		- GlobalExceptionHandler.java
	- service/
		- OrderService.java
	- repository/
		- OrderRepository.java
		- OrderItemRepository.java
		- InventoryRepository.java
		- CartRepository.java
	- entity/
		- Order.java
		- OrderItem.java
	- dto/
		- OrderRequest.java
		- OrderItemRequest.java
	- security/
		- SecurityConfig.java
- src/main/resources/application.properties

frontend/
- package.json
- src/
	- pages/
		- OrderPage.jsx
		- OrderHistoryPage.jsx
		- AdminDashboard.jsx
	- services/
		- orderService.js

## APIs Implemented

1. POST /api/orders
2. GET /api/orders?userId=1
3. GET /api/admin/orders
4. GET /api/admin/orders/{id}

### Place Order Request Body

{
	"userId": 1,
	"items": [
		{ "productId": 1, "quantity": 2, "price": 100.0 },
		{ "productId": 2, "quantity": 1, "price": 50.0 }
	]
}

## Order Flow (as required)

When POST /api/orders is called:

1. Save order record
2. Calculate total amount
3. Save order items with orderId
4. Reduce stock in products table
5. Clear user cart items

If stock is not enough, API returns 400 and transaction rolls back.

## Run Backend

cd backend
mvn spring-boot:run

Default backend URL:
http://localhost:8080

Update DB config in backend/src/main/resources/application.properties if needed.

## Run Frontend

cd frontend
npm install
npm start

Default frontend URL:
http://localhost:3000

## Integration Checklist

- Login working (from Person 1)
- Products API working (from Person 2)
- Cart API working (from Person 3)
- Order placed successfully (Person 4)
- Admin can view orders (Person 4)

## Common Mistakes to Avoid

- Not setting orderId in order_items
- Forgetting total calculation
- Not reducing stock
- Not clearing cart
- Different DB schema from team