// index.js

import React from 'react';
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginPage from './Components/Login/LoginPage';
//import VirtualOffice from './components/VirtualOffice/VirtualOffice';
//import CoWorking from './components/CoWorking/CoWorking';
//import MeetingRooms from './components/MeetingRooms/MeetingRooms';
import AdminDashboard from './Components/Dashboard/Admin/DashAdmin/AdminDashboard';
import UserDashboard from './Components/Dashboard/User/DashUser/UserDashboard';
import PrivateRoute from './Utils/PrivateRoute';
//import PasswordResetForm from './Components/Login/PasswordResetForm';
import PasswordResetPage from './Components/Login/PasswordResetPage';
import ConfirmationPage from './Components/Login/ConfirmationPage';
import ThanksPage from './Components/Login/ThanksPage';
//import Users from './Components/Dashboard/Admin/Users/Users';
//import User from './Components/Dashboard/Admin/Users/User';
//import AddUser from './Components/Dashboard/Admin/Users/AddUser';
import EmailRecoveryForm from './Components/Login/EmailRecoveryForm';
//import BookingCalendar from './Components/Calendar/BookingCalendar';

ReactDOM.render(
  
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/recover" element={<EmailRecoveryForm />} />
      {/* <Route path="/reset" element={<PasswordResetForm />} /> */}
      <Route path="/confirm-email/:confirmationToken" element={<ConfirmationPage />} />
      <Route path="/thanks" element={<ThanksPage />} />
      <Route path="/reset/:resetToken" element={<PasswordResetPage />} />    
      {/*<Route path="/virtual-office" element={<VirtualOffice />} />*/}
      {/*<Route path="/coworking" element={<CoWorking />} />*/}
      {/*<Route path="/meeting-rooms" element={<MeetingRooms />} />*/}
      <Route path='/dashboard/admin' element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      {/* <Route path='/dashboard/admin/users' element={<PrivateRoute><Users /></PrivateRoute>} /> */}
      {/* <Route path='/dashboard/admin/users/:id' element={<PrivateRoute><User /></PrivateRoute>} /> */}
      {/* <Route path='/dashboard/admin/users/add-user' element={<PrivateRoute><AddUser /></PrivateRoute>} /> */}
      <Route path='/dashboard/user' element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
      {/* <Route path='dashboard/admin/calendar' element={<PrivateRoute><BookingCalendar /></PrivateRoute> } /> */}
    </Routes>
  </Router>,
  
  document.getElementById('root')
);