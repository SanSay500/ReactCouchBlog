import './App.css';
import axios from 'axios';

function App() {
    var username = 'sansay';
    var password = 'spartak'
    const token = `${username}:${password}`;
    const encodedToken = btoa(token);
    axios.defaults.baseURL = 'http://localhost:5984';
    axios.defaults.headers.common['Authorization'] = 'Basic '+ encodedToken;

        function fetch_dbs() {
            axios('/_all_dbs')
                .then(json => console.log(json.data))
        }

        function fetch_database() {
            axios('/albums/6e1295ed6c29495e54cc05947f18c8af')
                .then((body) => {
                    console.log(body.data);
                });
        }
        function add_record(){
            axios.put('/albums'+axios('/uuids').then(json=>json.data),{
                name: 'Metal',
                year: '1995',
                producer: 'gnome'
            }).then(json => console.log(json))
        }

        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <button onClick={fetch_dbs}>Fetch dbs</button>
                        <br/>
                        <button onClick={fetch_database}>Fetch database</button>
                        <br/>
                        <button onClick={add_record}>Add record</button>

                    </div>
                </header>
            </div>
        );
    }

    export default App;
