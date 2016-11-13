
http://sqlfiddle.com/

CREATE TABLE users
	(`id` int, `name` varchar(20), `pass` varchar(20), `role` varchar(10) )
;
	
INSERT INTO users
	(id,`name`,`pass`,`role`)
VALUES
    (0, 'admin','123', 'Admin'),
	(1, 'John', '456', 'Customer'),
    (2, 'Mary', '789', 'Sales')
;

Attack Query:
SELECT * FROM users where name='admin' -- ' AND pass='456'

