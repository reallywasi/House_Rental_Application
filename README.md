# House Rental Application

A full-stack property rental application that simplifies the process of listing, browsing, and renting properties. With secure role-based access and seamless state management, the app ensures an excellent user experience for landlords and tenants.

---

## Features

- **Property Listings**: Over 20+ properties listed with detailed information.
- **Secure Authentication**: Implemented JWT-based authentication to ensure data protection.
- **Role-Based Access**: Separate functionalities for landlords and tenants.
- **State Management**: Utilized Redux for efficient and seamless state updates.
- **User-Friendly Design**: Designed with SCSS for a responsive and appealing interface.

---

## Technologies Used

| Technology     | Usage                       |
|----------------|-----------------------------|
| **Frontend**   | React.js, Redux, SCSS       |
| **Backend**    | Node.js, Express.js, JWT    |
| **Database**   | MongoDB                     |
| **APIs**       | REST APIs                   |

---

## Key Functionalities

### For Tenants:
- Browse available properties.
- View detailed property descriptions and images.
- Rent properties securely.

### For Landlords:
- List properties for rent.
- Manage property listings.
- Monitor rental status.

---

## Visual Representation

### Graph: User Roles and Usage Distribution

```text
Landlords | ██████████ 40%  
Tenants   | ██████████████████ 60%  
```

### Example Property Listing Table

| Property Name       | Location       | Rent (per month) | Available |
|---------------------|----------------|------------------|-----------|
| Cozy Apartment      | New York, NY   | $2,000           | Yes       |
| Luxury Condo        | Los Angeles, CA| $3,500           | No        |
| Family Home         | Chicago, IL    | $1,800           | Yes       |

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd House_Rental_Application
   ```

3. **Install dependencies**:
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd frontend
   npm install
   ```

4. **Setup Environment Variables**:
   - Create a `.env` file in the backend directory.
   - Add the following variables:
     ```
     MONGO_URI=<Your MongoDB Connection String>
     JWT_SECRET=<Your JWT Secret Key>
     ```

5. **Run the Application**:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend
   cd frontend
   npm start
   ```

6. Open the application in your browser at `http://localhost:3000`.

---

## Folder Structure

```
House_Rental_Application/
|-- backend/
|   |-- models/
|   |-- routes/
|   |-- controllers/
|   |-- .env
|   |-- server.js
|
|-- frontend/
|   |-- src/
|       |-- components/
|       |-- pages/
|       |-- redux/
|       |-- styles/
|       |-- App.js
|   |-- public/
```

---

## Future Enhancements

- **Add Payment Gateway**: To handle rental transactions online.
- **Enhanced Analytics**: Provide detailed insights for landlords and tenants.
- **Property Recommendations**: Implement a recommendation engine.
