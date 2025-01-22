# Tea Inventory CRUD API

## Overview
This project is a basic **CRUD (Create, Read, Update, Delete)** API for managing a tea inventory system. Built with **Node.js** and **Express**, 
it demonstrates fundamental backend development concepts, including structured logging and endpoint testing.

---

## Features
- **Add Tea**: Create new tea records with name and price.  
- **View Teas**: Retrieve all tea records or a specific tea by ID.  
- **Update Tea**: Modify existing tea details.  
- **Delete Tea**: Remove tea records from the inventory.  
- **Logging**: Integrated **Winston** and **Morgan** for request monitoring and debugging.  
- **Testing**: Thoroughly tested endpoints using **Postman**.

---

## Technologies Used
- **Node.js**: Backend runtime environment  
- **Express**: Web application framework  
- **Winston**: Logging library for detailed logs  
- **Morgan**: HTTP request logger  
- **Postman**: API testing tool  

---

## Installation

1. **Clone the Repository**
   git clone https://github.com/your-username/tea-inventory-crud-api.git
   cd tea-inventory-crud-api

2. **Install Dependencies**
   npm install
3. **Environment Setup**
   Create a .env file in the root directory for environment variables (if applicable). Example: PORT=3000
4. **Run the Server**
   npm start

## API Endpoints
Base URL: http://localhost:3000

1. Add Tea: "POST /teas"
   Request Body
   {
    "name": "Green Tea",
    "price": 10
   }

2. Get All Teas: "GET /teas"

3. Get Tea by ID: "GET /teas/:id"

4. Update Tea: "PUT /teas/:id"
   Request Body
   {
    "name": "Black Tea",
    "price": 12
   }

5. Delete Tea: "DELETE /teas/:id"


## Logging
Logs are generated using Winston and Morgan for detailed insights:
File logs: Stored in app.log.
Console logs: Colored and formatted for easier debugging.

## Testing
Use Postman to test the API:
Import endpoints into Postman.
Test CRUD operations using appropriate HTTP methods (POST, GET, PUT, DELETE).









