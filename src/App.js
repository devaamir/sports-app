import './App.css';
import Matches from './components/screens/Matches';
import Table from './components/screens/Table';
import News from './components/screens/News';
import Nav from './components/screens/includes/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
          <Switch>
            <Route path="/Sports-App" exact><Matches /></Route>
            <Route path="/Sports-App/Table"><Table /></Route>
            <Route path="/Sports-App/News"><News /></Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
