package adam.dev.ecom_enterprise.graphql.resolvers;

import adam.dev.ecom_enterprise.entity.Order;
import adam.dev.ecom_enterprise.graphql.inputs.OrderInput;
import adam.dev.ecom_enterprise.service.OrderService;
import adam.dev.ecom_enterprise.service.PaymentCheckoutService;
import com.braintreegateway.Result;
import com.braintreegateway.Transaction;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Profile;

@Profile("disabled")
@DgsComponent
@RequiredArgsConstructor
public class PaymentCheckoutResolver {

    private final PaymentCheckoutService paymentCheckoutService;

    private final OrderService orderService;

    @DgsMutation
    public Boolean paymentCheckout(@InputArgument OrderInput input) {
        Order order = orderService.savePendingOrder(input);
        Result<Transaction> result = paymentCheckoutService.makeTransactionRequest(input);
        boolean isSuccess = result.isSuccess();

        if (isSuccess) {
            String transactionId = result.getTarget().getId();
            orderService.markOrderAsPaid(order.getId(), transactionId);
        } else {
            orderService.markOrderAsFailed(order.getId());
        }

        return isSuccess;
    }

}
