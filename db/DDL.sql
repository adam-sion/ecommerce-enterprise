DROP SCHEMA IF EXISTS jtv_candles CASCADE;
CREATE SCHEMA jtv_candles;

DROP TABLE IF EXISTS jtv_candles.users CASCADE;
CREATE TABLE jtv_candles.users
(
    id             SERIAL PRIMARY KEY,
    email          VARCHAR(255),
    password       VARCHAR(255),
    name           VARCHAR(255),
    oauth_provider VARCHAR(50),
    oauth_id       VARCHAR(255),
    role           VARCHAR(50),
    picture        TEXT
);

DROP TABLE IF EXISTS jtv_candles.categories;
CREATE TABLE jtv_candles.categories
(
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(255),
    image TEXT
);

DROP TABLE IF EXISTS jtv_candles.products;
CREATE TABLE jtv_candles.products
(
    id             SERIAL PRIMARY KEY,
    title          VARCHAR(50),
    price          NUMERIC(10, 2),
    category_id    BIGINT,
    image          TEXT,
    thumbnails     TEXT[],
    description    TEXT,
    stock_quantity INT,
    created_at     TIMESTAMP,
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories (id)
);

DROP TABLE IF EXISTS jtv_candles.orders;
CREATE TABLE jtv_candles.orders
(
    id                SERIAL PRIMARY KEY,
    user_id           INT,
    payment_intent_id VARCHAR(255),
    total_amount      INT,
    currency          VARCHAR(20),
    status            VARCHAR(20),
    created_at        TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
);

DROP TABLE IF EXISTS jtv_candles.order_items;
CREATE TABLE jtv_candles.order_items
(
    id         SERIAL PRIMARY KEY,
    order_id   INT,
    product_id INT,
    quantity   INT,
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders (id),
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products (id)
);

