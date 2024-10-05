-- MySQL Workbench Synchronization
-- Generated: 2024-09-26 19:04
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Jeannette

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `mydb`.`projects` (
  `projects_id` INT(11) NOT NULL AUTO_INCREMENT,
  `projects_name` VARCHAR(255) NOT NULL,
  `projects_description` VARCHAR(1000) NOT NULL,
  `projects_image` VARCHAR(150) NOT NULL,
  `projects_status` VARCHAR(1) NOT NULL,
  `category_id` INT(11) NOT NULL,
  PRIMARY KEY (`projects_id`, `category_id`),
  INDEX `fk_projects_category_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_projects_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `mydb`.`category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(16) NOT NULL,
  `user_email` VARCHAR(255) NOT NULL,
  `user_password` VARCHAR(32) NOT NULL,
  `user_create_time` TIMESTAMP NOT NULL,
  `user_status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `mydb`.`category` (
  `category_id` INT(11) NOT NULL,
  `category_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


/*
PROJECT TABLE MODIFICATION
*/

ALTER TABLE `myprojects`.`projects` 
DROP FOREIGN KEY `fk_projects_category`;
ALTER TABLE `myprojects`.`projects` 
ADD COLUMN `projects_github` VARCHAR(255) NOT NULL AFTER `projects_description`,
ADD COLUMN `projects_datecreated` DATETIME NOT NULL AFTER `projects_status`,
CHANGE COLUMN `projects_status` `projects_status` TINYINT NOT NULL ,
CHANGE COLUMN `category_id` `projects_datecreated` INT NOT NULL ;
ALTER TABLE `myprojects`.`projects` 
ADD CONSTRAINT `fk_projects_category`
  FOREIGN KEY (`projects_datecreated`)
  REFERENCES `myprojects`.`category` (`category_id`);

