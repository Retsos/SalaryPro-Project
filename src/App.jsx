import React from 'react';
import Employee from './Components/Pages/WebApp/Employee';
import Home from './Components/Pages/Website/Home';
import Employers from './Components/Pages/WebApp/Employers';
import LoginPage from './Components/Pages/Website/LoginPage';
import Contact from './Components/Pages/Website/Contact';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/WebApp/MainPage';
import { UserProvider } from './Components/Pages/UsernameContext';
import Wraria from './Components/Pages/WebApp/Wraria';  
import Misthodosia from './Components/Pages/WebApp/Misthodosia';
import MyProfile from './Components/Pages/WebApp/MyProfile'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Employee' element={<Employee />} />
        <Route path='/Employers' element={<Employers />} />
        <Route path='/Wraria' element={<Wraria />} />
        <Route path='/Misthodosia' element={<Misthodosia />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/MainPage' element={<MainPage />} />
      </Routes>
    </UserProvider>
  );
}
export default App;
