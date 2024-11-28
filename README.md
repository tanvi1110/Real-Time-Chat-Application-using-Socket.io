# C CHAT
#  Real Time CHAT Web Application

A simple real-time chat application using React, Socket.IO, and Express. This project allows users to join a chat room, send and receive messages in real-time. The server uses Socket.IO for communication, and the frontend is built using React with routing powered by React Router.

## Tech Stack

- **Frontend**: React, React Router, Socket.IO-client
- **Backend**: Node.js, Express, Socket.IO
- **Styling**: CSS

## Features

- **User Authentication**: Enter your name to join the chat.
- **Real-Time Messaging**: Send and receive messages instantly.
- **Dynamic Chat Room**: Users can join and leave the chat room, with notifications for each event.
- **Responsive UI**: Simple, clean, and responsive design.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn
- A modern browser (e.g., Chrome, Firefox)

### Clone the Repository

```bash
git clone <repository-url>
cd chat-app
```

- Navigate to the client folder:
    ```bash
    cd client
    ```
- Install dependencies:
    ```bash
    npm install
    ```
- Start the development server:
    ```bash
    npm start
    ```
- The frontend will be available at [http://localhost:3000](http://localhost:3000).

- Navigate to the server folder:
    ```bash
    cd server
    ```
- Install dependencies:
    ```bash
    npm install
    ```
- Start the server:
    ```bash
    node index.js
    ```
- The server will be running on [http://localhost:4500](http://localhost:4500).

## CORS Configuration

The server is configured to allow requests from the frontend (running on port 3000). If deploying to production, adjust the CORS settings as needed.

## File Structure

```bash
/client
  /components
    /Join
      Join.js
      Join.css
    /Chat
      Chat.js
      Chat.css
  App.js
  App.css
/server
  index.js
```

## How It Works

### Frontend (React):

- **Join.js**: Users enter their name and are redirected to the chat room.
- **Chat.js**: Displays the chat interface, listens for new messages, and sends messages to the server via Socket.IO.

### Backend (Express & Socket.IO):

- **index.js**: The server listens for connections, handles user joins, broadcasts messages, and handles disconnections.

### Socket.IO Communication:

- **joined**: Sent by the client when a user joins.
- **message**: Sent by the client when a user sends a message.
- **sendMessage**: Sent to all connected clients with the new message.
- **userJoined & leave**: Broadcasts when a user joins or leaves the chat room.

## Notes

- Users are assigned a unique `socket.id` when they connect, which is used to manage their messages.
- The application is designed to run locally for development purposes.

## Future Improvements

- User-to-user private messaging.
- Add user avatars or profile pictures.
- Implement message persistence using a database.
- Improve UI/UX with more advanced features.