# 📝 NoaPad – Notepad Online Annotation 

**NoaPad** (Notepad Online Annotation) is a web-based notepad that enables users to create, edit, and manage notes efficiently. It leverages **MongoDB** for data storage and **RabbitMQ** for reliable message handling.

---

## 🚀 Technologies Used

- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/)

---

## ⚙️ Requirements

Ensure you have the following installed before running the project:

- **Docker** and **Docker Compose** to manage services
- **Node.js** for local development
- **MongoDB** for note storage
- **RabbitMQ** for message queueing

---

## 🛠️ Setup and Usage

1. **Clone the repository**  
   ```sh
    git clone https://github.com/agostinhoramos/noapad.git
    cd noapad
    ```


2. **Set up environment variables**

    Rename the `template.env` file to `.env` and update the settings as needed.


3. **Start the application using Docker Compose**

    ```sh
    docker-compose up --build -d
    ```

    This will start the MongoDB, RabbitMQ, and the application services.

4. **Stop the application**

    ```sh
    docker-compose down
    ```

# 📌 Project Structure

    ```
    📂 noapad
    ├── 📂 src/noapad
    │   ├── 📂 components    # React components
    │   ├── 📂 pages         # Next.js pages
    │   ├── 📂 services      # MongoDB and RabbitMQ configuration
    │   ├── 📂 utils         # Utility functions
    │   ├── index.js          # Main entry point
    ├── 📄 .env.template     # Environment variables template
    ├── 📄 docker-compose.yml # Docker Compose configuration
    ├── 📄 README.md         # Project documentation
    ```

# 🐳 Useful Commands

- Check container logs

    ```sh
    docker-compose logs -f
    ```

- Access the MongoDB container

    ```sh
    docker exec -it mongodb mongosh
    ```

- Remove containers and volumes

    ```sh
    docker-compose down -v
    ```

# 📜 Licence

This project is licensed under the MIT Licence.

# 📌 Developed by 
- Agostinho Ramos