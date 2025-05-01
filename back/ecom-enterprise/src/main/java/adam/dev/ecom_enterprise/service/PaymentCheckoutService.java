package adam.dev.ecom_enterprise.service;

import adam.dev.ecom_enterprise.entity.Order;
import adam.dev.ecom_enterprise.graphql.inputs.OrderInput;
import com.braintreegateway.BraintreeGateway;
import com.braintreegateway.Result;
import com.braintreegateway.Transaction;
import com.braintreegateway.TransactionRequest;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class PaymentCheckoutService {

    private final BraintreeGateway braintreeGateway;

    public Result<Transaction> makeTransactionRequest(OrderInput orderInput) {
        TransactionRequest request = new TransactionRequest()
                .amount(BigDecimal.valueOf(orderInput.totalAmount()))
                .paymentMethodNonce(orderInput.nonce())
                .options()
                .submitForSettlement(true)
                .done();

        Result<Transaction> result = braintreeGateway.transaction().sale(request);

        return result;
    }
}