DROP SCHEMA IF EXISTS jtv_candles CASCADE;
CREATE SCHEMA jtv_candles;

DROP TABLE IF EXISTS jtv_candles.users CASCADE;
CREATE TABLE jtv_candles.users (
                                 id UUID PRIMARY KEY,
                                 email VARCHAR(255) NOT NULL,
                                 name VARCHAR(255),
                                 password VARCHAR(255),
                                 oauth_provider VARCHAR(50),
                                 oauth_id VARCHAR(255),
                                 role VARCHAR(50)
);