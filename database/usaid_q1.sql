USE USAID_DB;

CREATE TABLE Login (
user_id SERIAL,
username VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
last_login TIMESTAMP
);

CREATE TABLE WebTraffic (
 visitor_id VARCHAR(255),
 visit_date DATE,
 pages_visited VARCHAR(255), 
 time_spent FLOAT,
 referrer VARCHAR(255),
 device_type VARCHAR(255),
 campaign_source VARCHAR(255)
);

CREATE TABLE Donors (
 donor_id VARCHAR(255),
 name VARCHAR(255),
 email VARCHAR(255),
 address VARCHAR(255),
 contact_number VARCHAR(255),
 date_of_birth DATE,
 preferred_payment_method VARCHAR(255),
 donor_type VARCHAR(255)
);

CREATE TABLE DonationCampaigns (
 campaign_id VARCHAR(255),
 campaign_name VARCHAR(255),
 start_date DATE,
 end_date DATE,
 goal_amount FLOAT,
 collected_amount FLOAT
);

CREATE TABLE PaymentProcessingSecurity (
 gateway_id VARCHAR(255), 
 gateway_name VARCHAR(255),
 supported_methods VARCHAR(255)
);

CREATE TABLE Engagement (
 donor_id VARCHAR(255),
 page_interaction VARCHAR(255),
 time_spent_on_page FLOAT,
 clicks_on_donate_button FLOAT
);

CREATE TABLE DonationPrediction (
 prediction_id VARCHAR(255),
 donor_id VARCHAR(255),
 predicted_amount FLOAT,
 likelihood_to_donate FLOAT
);

CREATE TABLE Donations (
 donation_id VARCHAR(255),
 donor_id VARCHAR(255),
 amount FLOAT,
 currency VARCHAR(255),
 date DATE,
 payment_method VARCHAR(255),
 donation_campaign VARCHAR(255),
 status VARCHAR(255)
);