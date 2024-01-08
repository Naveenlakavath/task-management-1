 Step1:
------
	First we need to create a schema in mysql database.
	ex:
		create schema todo_list;
		use todo_list;

step2:
-----
	Create at a "task" table and insert the data .
	ex:
		create table task(id int(3) AUTO_INCREMENT ,
					name varchar(10),
					description varchar(15),
					 primary key(id));

		insert into task(id,name,description) 
		values(1,'Task1','Sample Task1');

		insert into task(id,name,description) 
		values(2,'Task2','Sample Task2');
		

		select * from task;

		commit;

step3:
------
	Develop backend services using spring boot using layered architecture.

step4:
------
	Add Spring Web , Spring Data Jpa, MySQL Driver and Lombok dependencies.

step5:
-----
	Test all the backend api's using postmon tool.

step6:
-----
	Create frontend components using reactjs in VSC editor.

step7:
-----
	Add bootstrap, react-router-dom and axios library.

step8:
-----
	Design react components as per requirements.
