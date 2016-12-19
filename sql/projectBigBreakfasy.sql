CREATE TABLE tbl_user (
    user_id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    telephone_no VARCHAR(30) NOT NULL,
    dob TIMESTAMP NOT NULL,
    date_signed_up TIMESTAMP NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE tbl_posts (
    post_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    word_one VARCHAR(30) NOT NULL,
    word_two VARCHAR(30) NOT NULL,
    word_three VARCHAR(30) NOT NULL,
    date_post TIMESTAMP NOT NULL,
    likes_no INT(11) NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY fk_user_post(user_id) REFERENCES tbl_user(user_id)
);

CREATE TABLE tbl_profile (
    profile_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    about TEXT(126) NOT NULL,
    email VARCHAR(11) NOT NULL,
    hidden_profile TINYINT(1) NOT NULL,
    smileys_no INT(11) NOT NULL,
    follower_no INT(11) NOT NULL,
    following_no INT(11) NOT NULL,
    total_likes_no INT(11) NOT NULL,
    PRIMARY KEY (profile_id),
    FOREIGN KEY fk_user_profile(user_id) REFERENCES tbl_user(user_id)
);

CREATE TABLE tbl_reaction (
    react_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    post_id INT(11) NOT NULL,
    PRIMARY KEY (react_id),
    FOREIGN KEY fk_user_reaction(user_id) REFERENCES tbl_user(user_id),
    FOREIGN KEY fk_post_reaction(post_id) REFERENCES tbl_posts(post_id)
);

CREATE TABLE tbl_word (
    word_id INT(11) NOT NULL,
    word_content VARCHAR(30) NOT NULL,
    last_used TIMESTAMP NOT NULL,
    frequencey INT(11) NOT NULL,
    PRIMARY KEY (word_id)
);

CREATE TABLE tbl_connect (
    connection_id INT(11) NOT NULL,
    connector_id INT(11) NOT NULL,
    connectee_id INT(11) NOT NULL,
    PRIMARY KEY (connection_id),
    FOREIGN KEY fk_profile_connect(connector_id) REFERENCES tbl_profile(user_id)
);