import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import MainPage from './components/MainPage'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import AppointmentsPage from './components/appointments/AppointmentsPage';
import DoctorsPage from './components/doctors/DoctorsPage';
import ServicesPage from './components/services/ServicesPage';
import DepartmentsPage from './components/departments/DepartmentsPage';
import LocationsPage from './components/locations/LocationsPage';
import ContactPage from './components/contact/ContactPage';
import About from './components/About';
import DoctorSummary from './components/doctors/DoctorSummary';
import BlogPost from './components/blog/BlogPost';
import ScrollToTop from './components/Layout/ScrollToTop';

function App() {

  return (
    <div className="bg">      
      <Router>
        <ScrollToTop></ScrollToTop>
        <Header></Header>
          <Switch>
            <Route exact path='/' component={MainPage}></Route>
            <Route exact path='/appointments' component={AppointmentsPage}></Route>
            <Route exact path='/doctors' component={DoctorsPage}></Route>
            <Route exact path='/doctors/:slug' component={DoctorSummary}></Route>
            <Route exact path='/services' component={ServicesPage}></Route>
            <Route exact path='/departments' component={DepartmentsPage}></Route>
            <Route exact path='/locations' component={LocationsPage}></Route>
            <Route exact path='/contact' component={ContactPage}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/blog/:slug' component={BlogPost}></Route>

            <Route component={NotFound}></Route>
          </Switch>
        <Footer></Footer>      
      </Router> 
    </div>
  );
}

export default App;
