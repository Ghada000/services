-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema trade
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trade
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trade` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `trade` ;

-- -----------------------------------------------------
-- Table `trade`.`goods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trade`.`goods` (
  `good_id` INT NOT NULL AUTO_INCREMENT,
  `good_type` VARCHAR(255) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  `feedbacks` INT NULL DEFAULT NULL,
  `rating` FLOAT NULL DEFAULT NULL,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `comments` TEXT NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`good_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `trade`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `trade`.`services` (
  `service_id` INT NOT NULL AUTO_INCREMENT,
  `service_type` VARCHAR(255) NULL DEFAULT NULL,
  `service_date` DATE NULL DEFAULT NULL,
  `location` VARCHAR(255) NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  `feedbacks` INT NULL DEFAULT NULL,
  `rating` FLOAT NULL DEFAULT NULL,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`service_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
schema.sql
3 KB
