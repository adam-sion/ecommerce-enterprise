DROP SCHEMA IF EXISTS jtv_candles CASCADE;
CREATE SCHEMA jtv_candles;


CREATE TABLE jtv_candles.users
(
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email          VARCHAR(255),
    password       VARCHAR(255),
    name           VARCHAR(255),
    oauth_provider VARCHAR(50),
    oauth_id       VARCHAR(255),
    role           VARCHAR(50),
    picture        TEXT
);


CREATE TABLE jtv_candles.categories
(
    id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name  VARCHAR(255),
    image TEXT
);


CREATE TABLE jtv_candles.products
(
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title          VARCHAR(50),
    slug           VARCHAR(255),
    price          NUMERIC(10, 2),
    image          TEXT,
    thumbnails     TEXT,
    materials      TEXT,
    sizes          TEXT,
    description    TEXT,
    stock_quantity INT,
    created_at     TIMESTAMP,
    category_id    UUID,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES jtv_candles.categories (id)
);


CREATE TABLE jtv_candles.payments
(
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    payment_intent_id VARCHAR(255),
    total_amount      NUMERIC(10, 2),
    currency          VARCHAR(20)
);


CREATE TABLE jtv_candles.customer_details
(
    id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    address        VARCHAR(255),
    city           VARCHAR(100),
    state          VARCHAR(100),
    postal_code    VARCHAR(20),
    customer_name  VARCHAR(255),
    customer_email VARCHAR(255),
    customer_phone VARCHAR(20)
);


CREATE TABLE jtv_candles.orders
(
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    delivery_status VARCHAR(20),
    created_at      TIMESTAMP,
    customer_id     UUID,
    payment_id      UUID,
    user_id         UUID,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES jtv_candles.users (id),
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES jtv_candles.customer_details (id),
    CONSTRAINT fk_payment FOREIGN KEY (payment_id) REFERENCES jtv_candles.payments (id)
);


CREATE TABLE jtv_candles.order_items
(
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id          UUID,
    product_id        UUID,
    quantity          UUID,
    price_at_purchase NUMERIC(10, 2),
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES jtv_candles.orders (id),
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES jtv_candles.products (id)
);