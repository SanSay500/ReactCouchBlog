import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {

function fetch_cookie(){
   axios.post('http://localhost:5984/_session', {
       name: 'sansay',
       password: 'spartak'
   })
      .then(json => console.log(json))
}

function fetch_session(){
    axios.get('http://localhost:5984/_session')
        .then(json => console.log(json))
}

function fetch_dbs(){
    axios.get('http://localhost:5984/_all_dbs')
        .then(json => console.log(json))
}

  return (
    <div className="App">
      <header className="App-header">
        

        <div>
          <button onClick={fetch_cookie}>Login</button><br/>
          <button onClick={fetch_session}>Fetch Session</button><br/>
          <button onClick={fetch_dbs}>Fetch dbs</button>

        </div>


      </header>
    </div>
  );
}

export default App;
