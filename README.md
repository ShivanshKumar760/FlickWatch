![SQLYAPPER Logo](https://github.com/ShivanshKumar760/SqlYapper/blob/master/sqlyapper.png)
# SQLYAPPER: Generate SQL Queries with GPT

**SQLYAPPER** is a web application that helps users generate SQL queries using the power of GPT models. Simply provide a natural language description of the desired query, and SQLYAPPER will translate it into accurate SQL code.

**Key Features:**

* **Natural Language Input:** Describe your query using plain English.
* **GPT-powered Generation:** Utilizes advanced GPT models to translate your description into valid SQL.
* **Supports Multiple Databases:** Generate queries compatible with various databases (e.g., MySQL, PostgreSQL, SQL Server).
* **User-friendly Interface:** Intuitive and easy-to-use interface for seamless query generation.
* **Code Formatting:** Generated SQL queries are formatted for better readability.

**Technology Stack:**

* **Frontend:** React.js 
* **Backend:** Node.js, Express.js
* **GPT Integration:** Seamless integration with a chosen GPT model (e.g., OpenAI's GPT-3, Google's Bard).


**Getting Started:**

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ShivanshKumar760/SqlYapper.git

### Prerequisites:

- **Node.js** (v14.x or higher)
---

## Frontend Setup:

1. Navigate to the `frontend` directory:
   ```bash
   cd client
2. Install dependencies:
   ```bash
   npm install or npm i or pnpm install
3. Run the React server:
   ```bash
   npm run dev or pnpm run dev

## Backend Setup:

1. Navigate to the `frontend` directory:
   ```bash
   cd server
2. Install dependencies:
   ```bash
   npm install or npm i or pnpm install
3. Populate the .env file for mongodb connection:
   ```bash
    GPT_API_KEY=YOUR_KEY 
    PORT=8000
4. Run the express server:
   ```bash
   node index.js
