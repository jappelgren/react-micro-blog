import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateMessage from '../CreateMessage/CreateMessage';
import Feed from '../Feed/Feed';
import LoginForm from '../LoginForm/LoginForm';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  // const [dummyData, setDummyData] = useState(initialDummyData)
  const [data, setData] = useState([])

  const fetchPosts = () => {
    axios.get('http://localhost:8080/api')
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
   

  useEffect(() => {
    fetchPosts()
  },[] )

  console.log(data)
  // console.log('dd', dummyData)
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginForm loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </Route>
        <Route path='/home'>
          <CreateMessage loggedInUser={loggedInUser} fetchPosts={fetchPosts}/>
          <Feed data={data} fetchPosts={fetchPosts}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
