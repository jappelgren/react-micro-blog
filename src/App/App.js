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
  posted: new Date().getTime() + 1
},
{
  id: 2,
  user: 'SharkMan5000',
  message: `Truly a great day to be sharkin'`,
  posted: new Date().getTime() + 2
},
{
  id: 3,
  user: 'Octoman',
  message: `I'm so tired of all these star wars.`,
  posted: new Date().getTime() + 3
}
]

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [dummyData, setDummyData] = useState(initialDummyData)

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginForm loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </Route>
        <Route path='/home'>
          <CreateMessage setDummyData={setDummyData}/>
          <Feed dummyData={dummyData}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
