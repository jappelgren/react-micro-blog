import { sub } from 'date-fns';
import format from 'date-fns/format';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateMessage from '../CreateMessage/CreateMessage';
import Feed from '../Feed/Feed';
import LoginForm from '../LoginForm/LoginForm';
import './App.css';

const initialDummyData = [
  {
  id: 1,
  user: 'SharkMan5000',
  message: `It's really great being the shark man`,
  posted: new Date().getTime() + 100000000
},
{
  id: 2,
  user: 'SharkMan5000',
  message: `Truly a great day to be sharkin'`,
  posted: new Date(628021800000)
},
{
  id: 3,
  user: 'Octoman',
  message: `I'm so tired of all these star wars.`,
  posted: new Date(1626886800000)
}
]

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [dummyData, setDummyData] = useState(initialDummyData)

  console.log('dd', dummyData)
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginForm loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </Route>
        <Route path='/home'>
          <CreateMessage dummyData={dummyData} setDummyData={setDummyData}/>
          <Feed dummyData={dummyData}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
