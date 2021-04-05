CREATE TABLE `cursonodejs`.`users` (
  `id` INT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `salt` VARCHAR(255) NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));