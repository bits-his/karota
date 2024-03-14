ALTER TABLE `super_agent` CHANGE `LGA` `lga` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE `super_agent` ADD `nin` VARCHAR(12) NULL DEFAULT NULL AFTER `lga`, ADD `dob` DATE NULL DEFAULT NULL AFTER `nin`, ADD `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP AFTER `dob`, ADD `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE  CURRENT_TIMESTAMP AFTER `created_at`; 
ALTER TABLE `super_agent` CHANGE `email` `email` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL; 




DELIMITER $$
DROP PROCEDURE IF EXISTS  `super_agent`$$
CREATE PROCEDURE `super_agent`(IN `_query_type` VARCHAR(10), IN `_id` INT, IN `_name` VARCHAR(50), IN `_phone` VARCHAR(50), IN `_email` VARCHAR(50), IN `_address` VARCHAR(50), IN `_vendor` INT, IN `_state` VARCHAR(50), IN `_lga` VARCHAR(100), IN `_nin` VARCHAR(15), IN `_dob` DATE)
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