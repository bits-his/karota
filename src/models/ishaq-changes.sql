ALTER TABLE `super_agent` CHANGE `LGA` `lga` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE `super_agent` ADD `nin` VARCHAR(12) NULL DEFAULT NULL AFTER `lga`, ADD `dob` DATE NULL DEFAULT NULL AFTER `nin`, ADD `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `dob`, ADD `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP AFTER `created_at`; 
ALTER TABLE `super_agent` CHANGE `email` `email` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL; 




DELIMITER $$
DROP PROCEDURE IF EXISTS  `super_agent`$$
CREATE PROCEDURE `super_agent`(
    IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(50), IN `_phone` VARCHAR(50), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_vendor` INT, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(100), IN `_nin` VARCHAR(15), IN `_dob` DATE)
BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `super_agent` (
            name,
            phone,
            email,
            address,
            vendor,
            state,
            lga,
            nin,
            dob
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _vendor,
            _state,
            _lga,
            _nin,
            _dob
        );
        
    ELSEIF _query_type ='select' THEN
        SELECT * FROM super_agent
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM super_agent;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM super_agent
        WHERE _phone LIKE CONCAT('%',__phone,'%') OR email  LIKE CONCAT('%',__phone,'%')  OR name  LIKE CONCAT('%',__phone,'%') ;
    ELSEIF _query_type ='update' THEN
        UPDATE super_agent SET  
            name = IFNULL(_name,name),
            phone = IFNULL(_phone,phone),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            vendor = IFNULL(_vendor,vendor),
            state = IFNULL(_state,lga),
            lga = IFNULL(_lga,lga)
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM agent
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;



DELIMITER $$
DROP PROCEDURE IF EXISTS `vehicles_registration`$$
CREATE PROCEDURE `vehicles_registration`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_owners_name` VARCHAR(50), IN `_owners_address` VARCHAR(50), IN `_owners_phone` VARCHAR(20), IN `_owners_email` VARCHAR(50), IN `_owners_state` VARCHAR(50), IN `_owners_lga` VARCHAR(50), IN `_owners_dob` DATE, IN `_vehicle_id` INT, IN `_owner_id` INT, IN `_engine_no` VARCHAR(50), IN `_plate_no` VARCHAR(500), IN `_purchased_date` DATE, IN `_registered_lg` VARCHAR(50))
BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `vehicle_owner` (
            owners_name,
            owners_address,
            owners_phone,
            owners_email,
            owners_state,
            owners_lga,
            owners_dob
        ) VALUES (
            _owners_name,
            _owners_address,
            _owners_phone,
            _owners_email,
            _owners_state,
            _owners_lga,
            _owners_dob
        );
         INSERT INTO `vehicle_registration` (
           owner_id,
           engine_no,
            plate_no,
            purchased_date,
            registered_lg 
        ) VALUES (
           LAST_INSERT_ID(),
            _engine_no,
            _plate_no,
            _purchased_date,
            _registered_lg
           
        );
        
     ELSEIF _query_type ='select' THEN
        SELECT * FROM `vehicle_registration`
        WHERE id=_id;
    
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `vehicle_owner`
        WHERE id = _id;
    END IF;
END$$
DELIMITER ;



DROP TABLE IF EXISTS vehicle_owner;
CREATE TABLE `vehicle_owner` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `lga` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


DELIMITER $$
DROP PROCEDURE IF EXISTS `vehicles_registration` $$
CREATE PROCEDURE `vehicles_registration`(
    IN `_query_type` VARCHAR(10), 
    IN `_owners_name` VARCHAR(50), 
    IN `_owners_address` VARCHAR(50), 
    IN `_owners_phone` VARCHAR(20), 
    IN `_password` VARCHAR(150), 
    IN `_owners_email` VARCHAR(50), 
    IN `_owners_state` VARCHAR(50), 
    IN `_owners_lga` VARCHAR(50), 
    IN `_owners_dob` DATE, 
    IN `_owners_nin` INT, 
    IN `_owners_next_of_kin` VARCHAR(50),
    IN `_engine_no` VARCHAR(50), 
    IN `_plate_no` VARCHAR(50), 
    IN `_purchased_date` DATE, 
    IN _state_registered VARCHAR(50), 
    IN `_registered_lg` VARCHAR(50), 
    IN _driver_name VARCHAR(50),
    IN _driver_nin VARCHAR(50),
    IN _driver_phone VARCHAR(50),
    IN _driver_email VARCHAR(50),
    IN _driver_address VARCHAR(50),
    IN _driver_dob VARCHAR(50),
    IN _driver_state VARCHAR(50),
    IN _driver_lga VARCHAR(50),
    IN _driver_next_of_kin VARCHAR(50)
    )
BEGIN
	DECLARE _last_user_id, _last_owner_id, _last_vehicle_id INT;
    IF _query_type = 'insert' THEN
    INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone_no`, 
        `password`, 
        `status`, 
        `role`) 
	VALUES(
        _owners_name, 
        _owners_name, 
        'vehicle',
        _owners_email,
        _owners_phone, 
        _password, 
        'active', 
        'user' );
        SET _last_user_id = LAST_INSERT_ID();
  INSERT INTO `vehicle_owner` (
            name,
            address,
            phone,
            email,
            state,
            lga,
            dob,
   		    user_id
        ) VALUES (
            _owners_name,
            _owners_address,
            _owners_phone,
            _owners_email,
            _owners_state,
            _owners_lga,
            _owners_dob,
            _last_user_id
        );
       SET _last_owner_id = LAST_INSERT_ID();
    INSERT INTO `vehicle_registration` (
    owner_id,
    engine_no,
    plate_no,
    purchased_date,
    state_registered,
    registered_lg
    )VALUES (
        _last_owner_id,
        _engine_no,
        _plate_no,
        _purchased_date,
        _state_registered,
        _registered_lg
    );   
    SET _last_vehicle_id = LAST_INSERT_ID();
         INSERT INTO `drivers` (
            name,
            nin,
            phone,
            email,
            address,
            dob,
            state,
            lga,
           	next_of_kin,
            vehicle_id
        ) VALUES (
            _driver_name,
            _driver_nin,
            _driver_phone,
            _driver_email,
            _driver_address,
            _driver_dob,
            _driver_state,
            _driver_lga,
            _driver_next_of_kin,
           _last_vehicle_id
        );

        INSERT INTO `drivers`( 
            `name`,
            `nin`,
            `phone`,
            `email`,
            `address`,
            `dob`,
            `state`,
            `lga`,
            `next_of_kin`,
            `vehicle_id`
        ) 
        VALUES(
            _driver_name,
            _driver_nin,
            _driver_phone,
            _driver_email,
            _driver_address,
            _driver_dob,
            _driver_state,
            _driver_lga,
            _driver_next_of_kin,
            _last_vehicle_id
        ); 
        ELSEIF _query_type ='select-all' THEN

        SELECT * FROM vehicle_registration;
        END IF;

        END$$
DELIMITER ;



DELIMITER $$
DROP PROCEDURE IF EXISTS `agent`$$
DROP PROCEDURE IF EXISTS `agents`$$
CREATE  PROCEDURE `agents`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(255), IN `_phone_no` VARCHAR(20), IN `_email` VARCHAR(255), IN `_address` VARCHAR(255), IN `_super_agent` VARCHAR(255), IN `_state` VARCHAR(100), IN `_lga` VARCHAR(100), IN `_password` VARCHAR(100), IN `_balance` DOUBLE(10,2))
BEGIN
    IF _query_type = 'create' THEN
    INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone_no`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'agent',
        _email,
        _phone, 
        'active', 
        'agent',
        _password );

        INSERT INTO `agents` (
            name,
            phone_no,
            email,
            address,
            super_agent,
            state,
            lga,
            user_id
        ) VALUES (
            _name,
            _phone_no,
            _email,
            _address,
            _super_agent,
            _state,
            _lga,             
            LAST_INSERT_ID()     
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `agents`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `agents` SET  
            name = _name,
            phone_no = _phone_no,
            email = _email,
            address = _address,
            super_agent = _super_agent,
            state = _state,
            lga = _lga
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agents`
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;

ALTER TABLE `agent` ADD `balance` DOUBLE(10,2) NOT NULL DEFAULT '0.00' AFTER `service_location`; 
ALTER TABLE `vehicle_registration` ADD `state_registrered` VARCHAR(50) NULL DEFAULT NULL AFTER `plate_no`; 

-- 15/03/2024

ALTER TABLE `vehicle_registration` ADD `lg_reg_no` VARCHAR(50) NULL DEFAULT NULL AFTER `owner_id`, ADD `manifacturer` VARCHAR(50) NULL DEFAULT NULL AFTER `lg_reg_no`, ADD `manifacturing_date` DATE NULL DEFAULT NULL AFTER `manifacturer`;

DELIMITER $$
DROP PROCEDURE IF EXISTS `vehicle`$$
CREATE PROCEDURE `vehicles`(
    IN `_query_type` VARCHAR(10),  
    IN `_id` DATE, 
    IN `_owner_id` DATE, 
    IN `_lg_reg_no` VARCHAR(50),
    IN `_engine_no` VARCHAR(50), 
    IN `_plate_no` VARCHAR(50), 
    IN `_manifacturer`   VARCHAR(50),
    IN `_manifacturing_date`   DATE,
    IN `_purchased_date` DATE, 
    IN `_state_registrered` VARCHAR(50),
    IN `_registered_lg` VARCHAR(50)
)
BEGIN
	
    IF _query_type = 'insert' THEN

  INSERT INTO `vehicle_registration`(`owner_id`, `lg_reg_no`, `manifacturer`, `manifacturing_date`, `engine_no`, `plate_no`, `state_registrered`, `purchased_date`, `registered_lg`) 
    VALUES (
        _owner_id,
        _lg_reg_no,
        _manifacturer,
        _manifacturing_date,
        _engine_no,
        _plate_no,
        _state_registrered,
        _purchased_date,
        _state_registrered,
        _purchased_date,
        _registered_lg
    );   
     ELSEIF _query_type ='select' THEN
        SELECT * FROM `vehicle_registration`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vehicle_registration`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vehicle_registration`
        WHERE lg_reg_no LIKE CONCAT('%',_lg_reg_no,'%') OR engine_no  LIKE CONCAT('%',_engine_no,'%')  OR plate_no  LIKE CONCAT('%',_plate_no,'%') ;
    
        END IF;
        END$$
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS `vehicle_owners`//
CREATE PROCEDURE `vehicle_owners`(
    IN query_type VARCHAR(255),
    IN p_id INT,
    IN p_user_id INT,
    IN p_name VARCHAR(255),
    IN p_address VARCHAR(255),
    IN p_phone VARCHAR(20),
    IN p_email VARCHAR(255),
    IN p_state VARCHAR(100),
    IN p_lga VARCHAR(100),
    IN p_password VARCHAR(255)
)
BEGIN
IF query_type ='insert' THEN
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        p_name, 
        p_name, 
        'vehicle',
        p_email,
        p_phone, 
        'active', 
        'user',
        p_password );
    INSERT INTO `vehicle_owners`(
        `user_id`,
        `name`,
        `address`,
        `phone`,
        `email`,
        `state`,
        `lga`,
        `dob`,
        `user_id`
    ) VALUES (
        LAST_INSERT_ID(),
        p_name,
        p_address,
        p_phone,
        p_email,
        p_state,
        p_lga,
        p_dob,
        p_user_id
    );
     ELSEIF query_type ='select' THEN
        SELECT * FROM `vehicle_owners`
        WHERE id=p_id;
    ELSEIF query_type ='select-all' THEN
        SELECT * FROM `vehicle_owners`;
    ELSEIF query_type ='search' THEN
        SELECT * FROM `vehicle_owners`
        WHERE phone LIKE CONCAT('%',p_phone,'%') OR email  LIKE CONCAT('%',p_email,'%')  OR name  LIKE CONCAT('%',p_name,'%') ;
    END IF;
    
END //

DELIMITER ;

ALTER TABLE `vehicle_registration` ADD `balance` DOUBLE(10,0) NOT NULL DEFAULT '0.00' AFTER `registered_lg`; 

ALTER TABLE `super_agent` CHANGE `dob` `balance` DOUBLE(10,2) NULL DEFAULT '0.00'; 


DELIMITER $$
DROP PROCEDURE IF EXISTS `agents` $$
CREATE PROCEDURE `agents`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(255), IN `_phone_no` VARCHAR(20), IN `_email` VARCHAR(255), IN `_address` VARCHAR(255), IN `_super_agent` VARCHAR(255), IN `_state` VARCHAR(100), IN `_lga` VARCHAR(100), IN _password VARCHAR(100), IN balance DOUBLE(10,2))
BEGIN
    IF _query_type = 'create' THEN
    INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone_no`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        p_name, 
        p_name, 
        'agent',
        p_email,
        p_phone, 
        'active', 
        'user',
        _password );

        INSERT INTO `agents` (
            name,
            phone_no,
            email,
            address,
            super_agent,
            state,
            lga,
            user_id
        ) VALUES (
            _name,
            _phone_no,
            _email,
            _address,
            _super_agent,
            _state,
            _lga,             
            LAST_INSERT_ID()     
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `agents`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `agents` SET  
            name = _name,
            phone_no = _phone_no,
            email = _email,
            address = _address,
            super_agent = _super_agent,
            state = _state,
            lga = _lga
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agents`
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;

ALTER TABLE `drivers` ADD `balance` DOUBLE(10,2) NOT NULL DEFAULT '0.00' AFTER `vehicle_id`; 

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE `super_agent`;

CREATE TABLE `super_agents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `vendor` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `lga` varchar(255) NOT NULL,
  `nin` varchar(12) DEFAULT NULL,
  `balance` double(10,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_vendor` (`vendor`),
  CONSTRAINT `fk_vendor` FOREIGN KEY (`vendor`) REFERENCES `vendors` (`id`)
) ;
SET FOREIGN_KEY_CHECKS = 1;


ALTER TABLE `admins` ADD `user_id` INT(9) NULL DEFAULT NULL AFTER `name`;

ALTER TABLE `agents` ADD `user_id` INT NULL DEFAULT NULL AFTER `id`;



DELIMITER $$
DROP PROCEDURE IF EXISTS  `super_agent`$$
CREATE PROCEDURE `super_agents`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(50), IN `_phone` VARCHAR(50), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_vendor` INT, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(100), IN `_nin` VARCHAR(15), IN `_dob` DATE, IN `_password` VARCHAR(100))
BEGIN
    IF _query_type = 'insert' THEN
    
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone_no`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'agent',
        _email,
        _phone, 
        'active', 
        'user',
        _password );

        INSERT INTO `super_agent` (
            name,
            phone,
            email,
            address,
            vendor,
            state,
            lga,
            nin,
            dob,
            user_id
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _vendor,
            _state,
            _lga,
            _nin,
            _dob,
            LAST_INSERT_ID()
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `super_agent`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `super_agent` SET  
            name = IFNULL(_name,name),
            phone = IFNULL(_phone,phone),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            vendor = IFNULL(_vendor,vendor),
            state = IFNULL(_state,lga),
            lga = IFNULL(_lga,lga)
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agent`
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;
--17-3-2024
ALTER TABLE `vendors` ADD `user_id` INT NULL DEFAULT NULL AFTER `id`;
ALTER TABLE `vendors` ADD `balance` DOUBLE(10,2) NOT NULL DEFAULT '0.00' AFTER `vendor_bn_rc`;
ALTER TABLE `vehicle_owner` ADD `balance` DOUBLE(10,2) NOT NULL DEFAULT '0.00' AFTER `user_id`;

DROP  TABLE `vehicle_owner` ;
CREATE TABLE `vehicle_owners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `lga` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` double(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
);

DELIMITER $$
DROP  PROCEDURE IF  EXISTS `agens`$$
DROP  PROCEDURE IF  EXISTS `agents`$$
CREATE  PROCEDURE `agents`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(255), IN `_phone` VARCHAR(20), IN `_email` VARCHAR(255), IN `_address` VARCHAR(255), IN `_super_agent` VARCHAR(255), IN `_state` VARCHAR(100), IN `_lga` VARCHAR(100), IN `_password` VARCHAR(100), IN `_balance` DOUBLE(10,2))
BEGIN
    IF _query_type = 'create' THEN
    INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'agent',
        _email,
        _phone, 
        'active', 
        'agent',
        _password );

        INSERT INTO `agents` (
            name,
            phone,
            email,
            address,
            super_agent,
            state,
            lga,
            user_id
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _super_agent,
            _state,
            _lga,             
            LAST_INSERT_ID()     
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `agents`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `agents` SET  
            name = _name,
            phone = _phone,
            email = _email,
            address = _address,
            super_agent = _super_agent,
            state = _state,
            lga = _lga
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agents`
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;

DELIMITER $$
DROP  PROCEDURE IF  EXISTS `driver`$$
DROP  PROCEDURE IF  EXISTS `drivers`$$
CREATE  PROCEDURE `drivers`(IN `_query_type` VARCHAR(10), IN `_driver_id` INT, IN `_name` VARCHAR(50), IN `_nin` INT, IN `_phone` VARCHAR(20), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_dob` DATE, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(50), IN `_next_of_kin` VARCHAR(50), IN `_vehicle_id` INT)
BEGIN
    IF _query_type = 'insert' THEN
        INSERT INTO `drivers` (
            name,
            nin,
            phone,
            email,
            address,
            dob,
            state,
            lga,
           	next_of_kin,
            vehicle_id
        ) VALUES (
            _name,
            _nin,
            _phone,
            _email,
            _address,
            _dob,
            _state,
            _lga,
            _next_of_kin,
            _vehicle_id
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `drivers`
        WHERE id=_driver_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `drivers` SET  
            name = IFNULL(_name,name),
            nin= IFNULL(_nin,nin),
            phone = IFNULL(_phone,phone),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            dob =IFNULL(_dob,dob),
            state = IFNULL(_state,state),
            lga = IFNULL(_lga,lga),
            next_of_kin = IFNULL(_next_of_kin,next_of_kin),
            vendor_id = IFNULL(_vendor_id,vendor_id)
        WHERE  
            id = _driver_id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `driver`
        WHERE id = _driver_id;

    END IF;
END$$
DELIMITER ;


DELIMITER $$
DROP   PROCEDURE IF EXISTS `super_agent`$$
DROP   PROCEDURE IF EXISTS `super_agents`$$
CREATE  PROCEDURE `super_agents`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(50), IN `_phone` VARCHAR(50), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_vendor` INT, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(100), IN `_nin` VARCHAR(15), IN `_password` VARCHAR(100))
BEGIN
    IF _query_type = 'insert' THEN
    
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'super_agents',
        _email,
        _phone, 
        'active', 
        'super_agent',
        _password );

        INSERT INTO `super_agents` (
            name,
            phone,
            email,
            address,
            vendor,
            state,
            lga,
            nin,
            user_id
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _vendor,
            _state,
            _lga,
            _nin,
            LAST_INSERT_ID()
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `super_agents`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `super_agents`;

    ELSEIF _query_type ='update' THEN
        UPDATE `super_agents` SET  
            name = IFNULL(_name,name),
            phone = IFNULL(_phone,phone),
            email = IFNULL(_email,email),
            address = IFNULL(_address,address),
            vendor = IFNULL(_vendor,vendor),
            state = IFNULL(_state,lga),
            lga = IFNULL(_lga,lga)
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agent`
        WHERE id = _id;

    END IF;
END $$
DELIMITER ;

DELIMITER $$
DROP  PROCEDURE IF  EXISTS `vehicle_owner`$$
DROP  PROCEDURE IF  EXISTS `vehicle_owners`$$

CREATE  PROCEDURE `vehicle_owners`(IN `query_type` VARCHAR(255), IN `p_id` INT, IN `p_user_id` INT, IN `p_name` VARCHAR(255), IN `p_address` VARCHAR(255), IN `p_phone` VARCHAR(20), IN `p_email` VARCHAR(255), IN `p_state` VARCHAR(100), IN `p_lga` VARCHAR(100), IN `p_dob` DATE, IN `p_password` VARCHAR(255))
BEGIN
IF query_type ='insert' THEN
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        p_name, 
        p_name, 
        'vehicle',
        p_email,
        p_phone, 
        'active', 
        'vehicle',
        p_password );
    INSERT INTO `vehicle_owners`(
        `user_id`,
        `name`,
        `address`,
        `phone`,
        `email`,
        `state`,
        `lga`,
        `dob`,
        `user_id`
    ) VALUES (
        LAST_INSERT_ID(),
        p_name,
        p_address,
        p_phone,
        p_email,
        p_state,
        p_lga,
        p_dob,
        p_user_id
    );
     ELSEIF query_type ='select' THEN
        SELECT * FROM `vehicle_owners`
        WHERE id=p_id;
    ELSEIF query_type ='select-all' THEN
        SELECT * FROM `vehicle_owners`;
    ELSEIF query_type ='search' THEN
        SELECT * FROM `vehicle_owners`
        WHERE phone LIKE CONCAT('%',p_phone,'%') OR email  LIKE CONCAT('%',p_email,'%')  OR name  LIKE CONCAT('%',p_name,'%') ;
    END IF;
    
END$$
DELIMITER ;

DELIMITER $$
DROP  PROCEDURE IF  EXISTS `vehicles`$$
DROP  PROCEDURE IF  EXISTS `vehicle`$$

CREATE  PROCEDURE `vehicles`(
    IN `_query_type` VARCHAR(10),  
    IN `_id` DATE, 
    IN `_owner_id` DATE, 
    IN `_lg_reg_no` VARCHAR(50),
    IN `_engine_no` VARCHAR(50), 
    IN `_plate_no` VARCHAR(50), 
    IN `_manifacturer`   VARCHAR(50),
    IN `_manifacturing_date`   DATE,
    IN `_purchased_date` DATE, 
    IN `_state_registrered` VARCHAR(50),
    IN `_registered_lg` VARCHAR(50)
)
BEGIN
	
    IF _query_type = 'insert' THEN
  INSERT INTO `vehicle_registration`(`owner_id`, `lg_reg_no`, `manifacturer`, `manifacturing_date`, `engine_no`, `plate_no`, `state_registrered`, `purchased_date`, `registered_lg`) 
    VALUES (
        _owner_id,
        _lg_reg_no,
        _manifacturer,
        _manifacturing_date,
        _engine_no,
        _plate_no,
        _state_registrered,
        _purchased_date,
        _state_registrered,
        _purchased_date,
        _registered_lg
    );   
     ELSEIF _query_type ='select' THEN
        SELECT * FROM `vehicle_registration`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vehicle_registration`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vehicle_registration`
        WHERE lg_reg_no LIKE CONCAT('%',_lg_reg_no,'%') OR engine_no  LIKE CONCAT('%',_engine_no,'%')  OR plate_no  LIKE CONCAT('%',_plate_no,'%') ;
    
        END IF;
        END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS `vendors`$$
CREATE  PROCEDURE `vendors`(
    IN `_query_type` VARCHAR(10), 
    IN `_id` INT, 
    IN `_vendor_name` VARCHAR(255), 
    IN `_vendor_ofiice_address` VARCHAR(255), 
    IN `_vendor_state` VARCHAR(255), 
    IN `_vendor_lga` VARCHAR(255), 
    IN `_vendor_org_phone` VARCHAR(255), 
    IN `_vendor_org_email` VARCHAR(255), 
    IN `_vendor_tin` VARCHAR(255), 
    IN `_vendor_profile` VARCHAR(255), 
    IN `_vendor_bn_rc` VARCHAR(255), 
    IN `_contact_name` VARCHAR(255), 
    IN `_contact_address` VARCHAR(255), 
    IN `_contact_state` VARCHAR(255), 
    IN `_contact_password` VARCHAR(255), 
    IN `_contact_phone` VARCHAR(255), 
    IN `_contact_email` VARCHAR(255), 
    IN `_contact_lga` VARCHAR(255), 
    IN `_contact_vendor` INT)
BEGIN
DECLARE last_user_id INT;
    IF _query_type = 'insert' THEN
     INSERT INTO `Users`( `name`, `username`, `account_type`, `email`, `phone`, `password`, `status`, `role`)
    VALUES ( `_contact_name`, `_contact_name`, 'vendor', `_contact_email`, `_contact_phone`, `_contact_password`, 'active','vendor');
    SET last_user_id = LAST_INSERT_ID();
        INSERT INTO `vendors` (
            vendor_name,
            vendor_ofiice_address,
            vendor_state,
            vendor_lga,
            vendor_org_phone,
            vendor_org_email,
            vendor_tin,
            vendor_profile,
            vendor_bn_rc,
            user_id
        ) VALUES (
            _vendor_name,
            _vendor_ofiice_address,
            _vendor_state,
            _vendor_lga,
            _vendor_org_phone,
            _vendor_org_email,
            _vendor_tin,
            _vendor_profile,
            _vendor_bn_rc,
            last_user_id
        );
        
        INSERT INTO `vendor_contact` (
            contact_name,
            contact_address,
            contact_state,
            contact_phone,
            contact_email,
            contact_lga,
            vendor_id,
            user_id
        ) VALUES (
            _contact_name,
            _contact_address,
            _contact_state,
            _contact_phone,
            _contact_email,
            _contact_lga,
            LAST_INSERT_ID(),
            last_user_id
        );
          ELSEIF _query_type ='delete' THEN
        DELETE FROM `vendors`
        WHERE id = _id;
         ELSEIF _query_type ='select' THEN
        SELECT * FROM `vendors`
        WHERE id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vendors`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vendors`
        WHERE vendor_name LIKE CONCAT('%',_vendor_name,'%') OR vendor_org_phone  LIKE CONCAT('%',_vendor_org_phone,'%') OR vendor_org_email  LIKE CONCAT('%',_vendor_org_email,'%');
    END IF;
END$$
DELIMITER ;

ALTER TABLE `vendor_contact` DROP `contact_dob`;
ALTER TABLE `vendors` CHANGE `vendor_org_phone` `vendor_org_phone` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE `vendor_contact` ADD `user_id` INT(9) NULL DEFAULT NULL AFTER `vendor_id`;
ALTER TABLE `agents` CHANGE `phone_no` `phone` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

TRUNCATE `Users`;

ALTER TABLE `Users` ADD UNIQUE(`email`);


DELIMITER $$
DROP  PROCEDURE IF  EXISTS `agens`$$
DROP  PROCEDURE IF  EXISTS `agents`$$
CREATE  PROCEDURE `agents`(
    IN `_query_type` VARCHAR(10), 
IN `_id` INT, 
IN `_name` VARCHAR(255), 
IN `_phone` VARCHAR(20), 
IN `_email` VARCHAR(255), 
IN `_address` VARCHAR(255), 
IN `_super_agent` VARCHAR(255), 
IN `_state` VARCHAR(100), 
IN `_lga` VARCHAR(100), 
IN `_password` VARCHAR(100), 
IN `_balance` DOUBLE(10,2),
IN `_service_location` VARCHAR(100)

)
BEGIN
    IF _query_type = 'create' THEN
    INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        _name, 
        _name, 
        'agent',
        _email,
        _phone, 
        'active', 
        'agent',
        _password );

        INSERT INTO `agents` (
            name,
            phone,
            email,
            address,
            super_agent,
            state,
            lga,
            service_location,
            user_id
        ) VALUES (
            _name,
            _phone,
            _email,
            _address,
            _super_agent,
            _state,
            _lga,      
            _service_location,       
            LAST_INSERT_ID()     
        );
    ELSEIF _query_type ='select' THEN
        SELECT * FROM `agents`
        WHERE id=_id;
    ELSEIF _query_type ='update' THEN
        UPDATE `agents` SET  
            name = _name,
            phone = _phone,
            email = _email,
            address = _address,
            super_agent = _super_agent,
            state = _state,
            lga = _lga
        WHERE  
            id = _id;
    ELSEIF _query_type ='delete' THEN
        DELETE FROM `agents`
        WHERE id = _id;

    END IF;
END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `dashboard_cards`(IN `query_type` VARCHAR(50))
BEGIN 
    DECLARE super_agents_count, vendors_count, vehicles_count, agents_count INT;

    IF query_type = 'cards-counts' THEN
        SELECT COUNT(*) INTO super_agents_count FROM super_agents;
        SELECT COUNT(*) INTO vendors_count FROM vendors;
        SELECT COUNT(*) INTO vehicles_count FROM vehicle_registration;
        SELECT COUNT(*) INTO agents_count FROM agents;
        SELECT super_agents_count AS super_agents_count, 
               vendors_count AS vendors_count, 
               vehicles_count AS vehicles_count, 
               agents_count AS agents_count;
    END IF;
END$$
DELIMITER ;



-- 19/03/2024

RENAME TABLE vehicle_owner TO vehicle_owners;

DELIMITER $$
DROP PROCEDURE IF EXISTS `vehicle_owners`$$
CREATE  PROCEDURE `vehicle_owners`(IN `query_type` VARCHAR(255), IN `p_user_id` INT, IN `p_name` VARCHAR(255), IN `p_address` VARCHAR(255), IN `p_phone` VARCHAR(20), IN `p_email` VARCHAR(255), IN `p_state` VARCHAR(100), IN `p_lga` VARCHAR(100), IN `p_password` VARCHAR(255))
BEGIN
IF query_type ='insert' THEN
      INSERT INTO `users`(
        `name`, 
        `username`, 
        `account_type`, 
        `email`, 
        `phone_no`, 
        `status`, 
        `role`,
        `password`) 
	VALUES(
        p_name, 
        p_name, 
        'vehicle',
        p_email,
        p_phone, 
        'active', 
        'user',
        p_password );
    INSERT INTO `vehicle_owners`(
        `user_id`,
        `name`,
        `address`,
        `phone`,
        `email`,
        `state`,
        `lga`,
        `dob`,
        `user_id`
    ) VALUES (
        LAST_INSERT_ID(),
        p_name,
        p_address,
        p_phone,
        p_email,
        p_state,
        p_lga,
        p_dob,
        p_user_id
    );
     ELSEIF query_type ='select' THEN
        SELECT * FROM `vehicle_owners` WHERE  id=p_user_id;
    ELSEIF query_type ='select-all' THEN
        SELECT * FROM `vehicle_owners`;
    ELSEIF query_type ='search' THEN
        SELECT * FROM `vehicle_owners`
        WHERE phone LIKE CONCAT('%',p_phone,'%') OR email  LIKE CONCAT('%',p_email,'%')  OR name  LIKE CONCAT('%',p_name,'%') ;
    END IF;
    
END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS `vehicles`$$
CREATE  PROCEDURE `vehicles`(
    IN `_query_type` VARCHAR(10), 
IN `_id` INT(9), 
IN `_owner_id` INT(9), 
IN `_lg_reg_no` VARCHAR(50), 
IN `_engine_no` VARCHAR(50), 
IN `_chasis_no` VARCHAR(50), 
IN `_plate_no` VARCHAR(50), 
IN `_manifacturer` VARCHAR(50), 
IN `_manifacturing_date` DATE, 
IN `_purchased_date` DATE, 
IN `_state_registrered` VARCHAR(50), 
IN `_registered_lg` VARCHAR(50))
BEGIN
	
    IF _query_type = 'insert' THEN
  INSERT INTO `vehicle_registration`(`owner_id`, `lg_reg_no`, `manifacturer`, `manifacturing_date`, `engine_no`, `plate_no`, `state_registrered`, `purchased_date`, `registered_lg`) 
    VALUES (
        _owner_id,
        _lg_reg_no,
        _manifacturer,
        _manifacturing_date,
        _engine_no,
        _plate_no,
        _state_registrered,
        _purchased_date,
        _state_registrered,
        _purchased_date,
        _registered_lg
    );   
     ELSEIF _query_type ='select' THEN
        SELECT * FROM `vehicle_registration`
        WHERE vehicle_id=_id;
    ELSEIF _query_type ='select-all' THEN
        SELECT * FROM `vehicle_registration`;
    ELSEIF _query_type ='search' THEN
        SELECT * FROM `vehicle_registration`
        WHERE lg_reg_no LIKE CONCAT('%',_lg_reg_no,'%') OR engine_no  LIKE CONCAT('%',_engine_no,'%')  OR plate_no  LIKE CONCAT('%',_plate_no,'%') ;
    
        END IF;
        END$$
DELIMITER ;
