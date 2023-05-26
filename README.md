## User Management Fullstack App
#### Live Demo: [https://product-management-fullstack.netlify.app/](https://user-management-fullstack.netlify.app/)

#### Screenshots

<table>
  <tr>
    <td><img width="1470" alt="Add User" src=https://github.com/chayan-1906/spring-udemy-john-thompson/assets/82430454/a482681b-17b1-4a66-9142-8e74a3a6d503></td>
  </tr>
  <tr>
    <td><img width="1470" alt="View User" src="https://github.com/chayan-1906/spring-udemy-john-thompson/assets/82430454/e9913f1f-f141-4d16-9431-a70ebd9583ba"></td>
  </tr>
  <tr>
    <td><img width="1470" alt="Edit User" src="https://github.com/chayan-1906/spring-udemy-john-thompson/assets/82430454/17f2eb84-ff12-4f0c-a105-a86546a4e6a5"></td>
  </tr>
</table>



## APIs

The server runs on Tomcat, on <http://localhost:8090>
Route | METHOD | Description
---------------------------- | ------ | -------------
/users | GET | Get all Users
/user?userId={userId} | GET | Get User by id
/user | POST | Add/Create a new User
/updateUser?userId={userId} | PUT | Update User
/user?userId={userId} | DELETE | Delete User

## Dependencies

* [Spring Boot Starter Data JPA](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa)
* [Spring Boot Starter Web](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web)
* [MySQL Connector/J](https://mvnrepository.com/artifact/com.mysql/mysql-connector-j)
* [Lombok](https://mvnrepository.com/artifact/org.projectlombok/lombok)
* [Spring Boot Starter Test](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-test)
* [Spring Boot DevTools](https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools)
