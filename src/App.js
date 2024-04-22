import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomerRegistrationPage from './components/CustomerRegistrationPage';
import PawnGeneratePage from './components/PawnGeneratePage';
import PersonalDetailsPage from './components/PersonalDetailsPage';
import JobDetailsPage from './components/JobDetailsPage';
import FamilyDetailsPage from './components/FamilyDetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/customer-registration" component={CustomerRegistrationPage} />
        <Route path="/pawn-generate" component={PawnGeneratePage} />
        <Route path="/personal-details" component={PersonalDetailsPage} />
        <Route path="/job-details" component={JobDetailsPage} />
        <Route path="/family-details" component={FamilyDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
