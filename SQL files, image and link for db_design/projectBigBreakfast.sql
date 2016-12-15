CREATE TABLE `tbl_user` (
	`user_id` int(11) NOT NULL AUTO_INCREMENT,
	`First_name` varchar(30) NOT NULL,
	`last_name` varchar(30) NOT NULL,
	`email` varchar(30) NOT NULL,
	`telephone_no` varchar(30) NOT NULL,
	`dob` DATE(6) NOT NULL,
	`date_signedup` DATE(6) NOT NULL DEFAULT 'TODAY',
	`username` varchar(30) NOT NULL,
	`password` varchar(30) NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `tbl_posts` (
	`post_id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` (11) NOT NULL,
	`word_one` varchar(30) NOT NULL,
	`word_two` varchar(30) NOT NULL,
	`word_three` varchar(30) NOT NULL,
	`date_post` DATETIME(1) NOT NULL,
	`likes_no` INT(11) NOT NULL,
	PRIMARY KEY (`post_id`)
);

CREATE TABLE `tbl_profile` (
	`profile_id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` (11) NOT NULL,
	`about` TEXT(126) NOT NULL,
	`email` varchar(11) NOT NULL,
	`hidden_profile` tinyint(1) NOT NULL,
	`no_of_smileys` int(11) NOT NULL,
	`follower_no` INT(11) NOT NULL,
	`following_no` INT(11) NOT NULL,
	`total_likes_no` INT(11) NOT NULL,
	PRIMARY KEY (`profile_id`)
);

CREATE TABLE `tbl_reaction` (
	`react_id` INT(11) NOT NULL,
	`user_id` varchar(11) NOT NULL,
	`post_id` varchar(11) NOT NULL,
	PRIMARY KEY (`react_id`)
);

CREATE TABLE `tbl_connect` (
	`connection_id` INT(11) NOT NULL,
	`connector_id` varchar(11) NOT NULL,
	`connectee_id` varchar(11) NOT NULL,
	PRIMARY KEY (`connection_id`)
);

CREATE TABLE `tbl_word` (
	`word_id` INT(11) NOT NULL,
	`word_content` varchar(30) NOT NULL,
	`last_used` TIMESTAMP NOT NULL,
	`frequency_used` INT(11) NOT NULL,
	PRIMARY KEY (`word_id`)
);

ALTER TABLE `tbl_posts` ADD CONSTRAINT `tbl_posts_fk0` FOREIGN KEY (`user_id`) REFERENCES `tbl_profile`(`user_id`);

ALTER TABLE `tbl_profile` ADD CONSTRAINT `tbl_profile_fk0` FOREIGN KEY (`user_id`) REFERENCES `tbl_user`(`user_id`);

ALTER TABLE `tbl_reaction` ADD CONSTRAINT `tbl_reaction_fk0` FOREIGN KEY (`user_id`) REFERENCES `tbl_profile`(`user_id`);

ALTER TABLE `tbl_reaction` ADD CONSTRAINT `tbl_reaction_fk1` FOREIGN KEY (`post_id`) REFERENCES `tbl_posts`(`post_id`);

ALTER TABLE `tbl_connect` ADD CONSTRAINT `tbl_connect_fk0` FOREIGN KEY (`connector_id`) REFERENCES `tbl_profile`(`user_id`);

