import './App.css';
import socketIO from 'socket.io-client'

const ENDPOINT = 'http://localhost:4500/'
const socket = socketIO(ENDPOINT, {transports:['websocket']})


function App() {

// when socket will connect inside will execute
  socket.on('connect', () => {

  })


  return (
   <div>
    working
   </div>
  );
}

export default App;
