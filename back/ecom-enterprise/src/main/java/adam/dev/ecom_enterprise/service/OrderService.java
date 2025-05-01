package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.OrderStatus;
import adam.dev.ecom_enterprise.entity.Order;
import adam.dev.ecom_enterprise.entity.OrderItem;
import adam.dev.ecom_enterprise.entity.Product;
import adam.dev.ecom_enterprise.graphql.inputs.OrderInput;
import adam.dev.ecom_enterprise.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    private final ProductService productService;

    public Order savePendingOrder(OrderInput input) {
        Order order = new Order(input.totalAmount(), OrderStatus.PENDING);
        List<OrderItem> orderItems = input.orderItems().stream()
                .map(orderItemInput ->
                {
                    Product product = productService.getProductById(orderItemInput.productId());
                   return new OrderItem(orderItemInput.quantity(), orderItemInput.priceAtPurchase(), order, product);
                })
                .toList();
        order.setOrderItems(orderItems);

        return orderRepository.save(order);
    }

    @Transactional
    public void markOrderAsPaid(String orderId, String transactionId) {
        Order order = markOrderDeliveryStatus(orderId, OrderStatus.PENDING);
        order.setTransactionId(transactionId);
    }

    @Transactional
    public void markOrderAsFailed(String orderId) {
        markOrderDeliveryStatus(orderId, OrderStatus.FAILED);
    }

    private Order markOrderDeliveryStatus(String orderId, OrderStatus orderStatus) {
        Order order = orderRepository.findById(orderId).orElseThrow(()-> new EntityNotFoundException(String.format("Order with id: '%s' not found", orderId)));
        order.setOrderStatus(orderStatus);

        return order;
    }

}
