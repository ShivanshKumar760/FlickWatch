![FlickWatch Logo](https://github.com/ShivanshKumar760/FlickWatch/blob/master/frontend/src/images/logo.png)

FlickWatch is a full-stack movie streaming platform that provides users with an engaging and seamless movie-watching experience. The application is built using React.js for the frontend and Express.js for the backend, integrating multiple APIs for movie data and streaming services.

## **Features**
- **Comprehensive Movie Streaming**: Users can browse, search, and stream movies effortlessly.  
- **Data Integration**: Movie details are fetched dynamically using the **TMDB API**.  
- **Seamless Streaming**: The **VidSrc API** is leveraged for streaming movies using unique backend-generated movie IDs.  
- **Modern UI**: Designed with **TailwindCSS** and enhanced with **Headless UI** components for a sleek and responsive user interface.  
- **Optimized Performance**: Improved page load times by 30% through an optimized codebase and efficient API calls.

---

## **Tech Stack**
### **Frontend**
- **React.js**: For building dynamic and responsive user interfaces.  
- **TailwindCSS**: For modern, responsive styling.  
- **Headless UI**: For pre-built accessible UI components.  

### **Backend**
- **Express.js**: RESTful API server for data handling and integration.  
- **TMDB API**: Fetching movie details and metadata.  
- **VidSrc API**: Streaming movies seamlessly.  

### **Hosting and Deployment**
- **Frontend**: Deployed on **Netlify** for fast, secure, and scalable hosting.  
- **Backend**: Hosted on **AWS EC2** with:  
  - **Nginx** as a reverse proxy.  
  - **Certbot** for SSL certificate configuration, ensuring secure communication.

---

## **Setup Instructions**
### **1. Prerequisites**
- Node.js and npm installed.  
- MongoDB (optional, depending on extensions).  
- An AWS EC2 instance or local server.  

### **2. Clone the Repository**
```bash  
git clone https://github.com/ShivanshKumar760/FlickWatch.git 
cd FlickWatch  
```

### **3. Install Dependencies**
- **Backend**:  
  ```bash  
  cd backend  
  npm install  
  ```  
- **Frontend**:  
  ```bash  
  cd frontend  
  npm install  
  ```  

### **4. Configure Environment Variables**
Create `.env` files in both the backend and frontend directories with the following:  

**Backend `.env`:**  
```env
MONGO_URL_LOCAL=your_mongodb_connectionString
TMDB_API_KEY=your_tmdb_api_key  
PORT=4000  
```  

**Frontend `.env`:**  
```env  
ViTE_BACKEND_API=https://your-backend-url
```  

### **5. Run the Application**
- **Backend**:  
  ```bash  
  cd backend  
  node  server.js
  ```  
- **Frontend**:  
  ```bash  
  cd frontend  
  npm start  
  ```  

---

## **Live Project**
- **Frontend**: [Visit FlickWatch](https://flickwatchio.netlify.app)  
- **GitHub Repository**: [FlickWatch Code](https://github.com/ShivanshKumar760/FlickWatch.git)  

---

## **Key Highlights**
- **Improved Performance**: Page load times reduced by 30%.  
- **Responsive Design**: Tailored for all screen sizes with TailwindCSS.  
- **Secure Hosting**: Backend secured with SSL using Certbot on AWS EC2.  

---

## **License**
This project is licensed under the MIT License.  

---
