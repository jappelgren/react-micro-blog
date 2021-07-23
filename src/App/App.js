import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateMessage from '../CreateMessage/CreateMessage';
import Feed from '../Feed/Feed';
import LoginForm from '../LoginForm/LoginForm';
import './App.css';
import Header from './Header/Header';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [data, setData] = useState([])
  const [cookie, setCookie, removeCookie] = useCookies(['userName'])

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

  return (
    
    <Router>
      <Grid container direction={'column'} alignItems={'center'} >
        <Switch>
          <Route path="/login">
            <LoginForm cookie={cookie} setCookie={setCookie} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
          </Route>
          <Route path='/home'>
            <Header removeCookie={removeCookie}/>
            <CreateMessage cookie={cookie} loggedInUser={loggedInUser} fetchPosts={fetchPosts}/>
            <Feed data={data} fetchPosts={fetchPosts}/>
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
