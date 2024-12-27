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

## State Management with Redux

Redux is utilized to manage global state efficiently, ensuring a seamless user experience across the application. Here is a breakdown of the Redux store and state setup:

### **Store Configuration**

The `store.js` file configures the Redux store, integrating Redux Persist to retain state information even when the browser is closed. This ensures a persistent user experience.

#### Middleware
Custom middleware is added to handle serialization checks for Redux Persist actions like `FLUSH`, `REHYDRATE`, and others.

### **State Management**

The state is managed using slices, with each slice representing a distinct feature of the application. For example:

| Feature               | State Variables        | Description                                   |
|-----------------------|------------------------|-----------------------------------------------|
| **User Authentication** | `user`, `token`       | Manages user login/logout and token storage. |
| **Listings**          | `listings`            | Stores property listing details.             |
| **User Actions**      | `tripList`, `wishList`, `propertyList`, `reservationList` | Tracks user-specific data like saved trips and reservations. |

### **Visualization of State Flow**

```text
Browser Action ---> Redux Store ---> Persist Storage ---> Browser Reload ---> Redux Rehydrates State
```

### Graph: State Transition

```text
Initial State --> Action Dispatched --> Reducer Updates State --> Store Reflects Changes --> UI Re-Renders


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

### **Client**

The `client` directory houses the front-end application built with React.

#### **Components**

| File             | Description                                                   |
|------------------|---------------------------------------------------------------|
| `Categories.jsx` | Renders property categories for filtering listings.           |
| `Footer.jsx`     | The footer component for consistent branding and links across the app. |
| `Header.jsx`     | The header component that includes navigation and branding.   |
| `ListingCard.jsx`| Displays individual property listing details in card format. |
| `Listings.jsx`   | Lists multiple properties dynamically.                        |
| `Loader.jsx`     | A loader component for displaying during data fetch operations. |
| `Navbar.jsx`     | The top navigation bar component.                             |
| `Slide.jsx`      | Carousel component for displaying image slides.               |
| `Trial.js`       | Temporary file for testing purposes.                          |

#### **Pages**

| File               | Description                                               |
|--------------------|-----------------------------------------------------------|
| `CategoryPage.jsx` | Displays properties based on selected categories.         |
| `CreateListing.jsx`| Allows users to create new property listings.            |
| `HomePage.jsx`     | The main landing page with featured properties and categories. |
| `ListingDetails.jsx`| Shows detailed information about a specific property.   |
| `LoginPage.jsx`    | Handles user login functionality.                         |
| `PropertyList.jsx` | A component to manage and display all properties.         |
| `RegisterPage.jsx` | Facilitates user registration.                            |
| `ReservationList.jsx`| Displays user-specific reservations.                     |
| `SearchPage.jsx`   | Enables property search functionality.                    |
| `TripList.jsx`     | Lists trips for the user, including reservations.         |
| `WishList.jsx`     | Displays properties saved by users in their wish list.    |

#### **Redux**

| File         | Description                                              |
|--------------|----------------------------------------------------------|
| `state.js`   | Contains global state and Redux actions.                 |
| `store.js`   | Configures the Redux store for state management.         |

#### **Styles**

| File       | Description                                       |
|------------|---------------------------------------------------|
| `App.css`  | Contains global styles and theme definitions for the project. |

#### **Root Files**

| File         | Description                                         |
|--------------|-----------------------------------------------------|
| `App.js`     | The main React application file.                    |
| `data.js`    | Contains mock or static data for testing purposes.  |
| `index.js`   | Entry point for the React application.             |
| `README.md`  | Documentation for the client-side codebase.        |
| `package.json`| Contains project dependencies and scripts for the client application. |
| `package-lock.json` | Locks dependency versions.                   |

---

### **Server**

The `server` directory includes the backend application built with Node.js and Express.

#### **Models**

| File         | Description                                      |
|--------------|--------------------------------------------------|
| `Booking.js` | Defines the schema for booking data.            |
| `Listing.js` | Defines the schema for property listings.       |
| `User.js`    | Defines the schema for user accounts.           |

#### **Public**

| Directory       | Description                                  |
|-----------------|----------------------------------------------|
| `uploads/`      | Stores uploaded images used in the platform. |

#### **Routes**

| File         | Description                                           |
|--------------|-------------------------------------------------------|
| `Test.js`     | Test endpoint for API validation.                    |
| `auth.js`     | Handles authentication routes and user sessions.     |
| `booking.js`  | Manages booking-related endpoints.                    |
| `listing.js`  | Handles property listing CRUD operations.            |
| `user.js`     | Manages user-related operations such as profile updates and deletions. |

#### **Root Files**

| File         | Description                                           |
|--------------|-------------------------------------------------------|
| `.env`       | Environment variables for sensitive information.      |
| `index.js`   | Entry point for the server application.              |
| `package.json`| Contains server-side dependencies and scripts.       |
| `package-lock.json` | Locks dependency versions for the server.        |
| `.gitignore` | Specifies files and directories to be ignored by Git.|
| `README.md`  | Documentation for the server-side codebase.          |

---

## System Architecture

The architecture follows a modular approach with a clear separation between the client and server.



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
