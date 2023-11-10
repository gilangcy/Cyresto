![Cyresto](https://geekflare.com/wp-content/uploads/2022/03/howfoodapiworks.png)
### Overview
Cyresto is a Restful API built using NestJS. This API serves to be an example project of a consumer API for a Food Order Application. We use PostgreSQL for the SQL database and deploy it via CI/CD in Google App Engine.

### API Details
Base URL : https://cyresto.uc.r.appspot.com/api
| Name                       | Description                        | URL                                              | Method |
|----------------------------|------------------------------------|--------------------------------------------------|--------|
| Get List Merchant Location | Returns location of all merchant   | api/v1/consumer/merchant/location                | GET    |
| Get a Merchant Location    | Returns location of a merchant     | api/v1/consumer/merchant/<merchant_id>/location  | GET    |
| Get List Menu Information  | Returns information of all menu    | api/v1/consumer/menu                             | GET    |
| Get a Menu Information     | Returns information of a menu      | api/v1/consumer/menu/<menu_id>                   | GET    |
| Get List Cart Item         | Returns the list item in cart      | api/v1/consumer/order/cart                       | GET    |
| Add Cart Item              | Add item to cart (count +)         | api/v1/consumer/order/cart                       | POST   |
| Edit Cart Item             | Edit item in cart (count +-)       | api/v1/consumer/order/cart/<menu_id>             | PUT    |
| Delete Cart Item           | Delete an item in cart             | api/v1/consumer/order/cart/<menu_id>             | DELETE |
| Checkout                   | Create order by items in cart      | api/v1/consumer/order/checkout                   | POST   |
| List Order                 | Returns list order                 | api/v1/consumer/order/                           | GET    |
| Create Merchant            | Add a Merchant location to db      | api/v1/producer/merchant/                        | POST   |
| Delete Merchant            | Delete a Merchant location in db   | api/v1/producer/merchant/<merchant_id>           | DELETE |
| Create Menu                | Add Menu information to db         | api/v1/producer/merchant/                        | POST   |
| Delete Menu                | Delete a Menu information in db    | api/v1/producer/merchant/<menu_id>           | DELETE |


### Testing the API
- You can test the API from Postman in this link 
    - [Postman Link](https://cyresto.postman.co/workspace/Team-Workspace~6d76e187-de30-4540-82de-5feb0432a83e/collection/31021070-8b31afc6-8d9f-459e-b278-c280b2e57a55?action=share&creator=31021070)
- or access the API directly 
    - example (to return list of menu) :
     https://cyresto.uc.r.appspot.com/api/v1/consumer/menu

### How to run this API locally 
1. Make sure on your local already installed :
    - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    - Code Editor (Vscode, Intellij, etc)
    - [NestJS](https://docs.nestjs.com/first-steps)
    - [Docker](https://docs.docker.com/engine/install/)
2. Creating the local PostgreSQL Database 
    - Open your terminal and please run this command
      ```
      docker run -d -p 5444:5432 --name my-postgres -e POSTGRES_PASSWORD=password postgres
      ```
    - To check our running db, we can try connecting to database (I recommend to access it via [Dbeaver](https://dbeaver.io/download/))
3. Clone the Repository
    ```
    git clone https://github.com/gilangcy/Cyresto.git
    ```
4. Create a Env file
    In the root of your repository (Cyresto)
    - Please create a file name .env
    - Please fill the env file with this information 
        ```
        DATABASE_USERNAME=postgres
        DATABASE_HOST=localhost
        DATABASE_PASSWORD=password
        ```

5. Installing the dependencies
    ```
    npm install
    ```

6. Start in the localhost 
    ```
    nest start
    ```  


### Authors 

Gilang Catur Yudishtira


### Acknowledgements

Thanks to the Hangry Team, for giving me this study case that challenged me to learn about NestJS and make this project. Then, also Thank you Alisha Yumna for helping me solve the problems that happen during the development.

