import React from 'react';
import Employee from './Components/Pages/WebApp/Employee';
import Home from './Components/Pages/Website/Home';
import Employers from './Components/Pages/WebApp/Employers';
import LoginPage from './Components/Pages/Website/LoginPage';
import Contact from './Components/Pages/Website/Contact';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './Components/Pages/UsernameContext';
import Wraria from './Components/Pages/WebApp/Wraria';  
import Misthodosia from './Components/Pages/WebApp/Misthodosia';
import MyProfile from './Components/Pages/WebApp/MyProfile'
import Employee2 from './Components/Pages/WebApp/Employee2';
import CreateAcc from './Components/Pages/Website/CreateAcc';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/Home' element={<Home />} /> 
        <Route path='/CreateAcc' element={<CreateAcc />} /> 
        <Route path='/Employee' element={<Employee />} />
        <Route path='/Employee2' element={<Employee2 />} />
        <Route path='/Employers' element={<Employers />} />
        <Route path='/Wraria' element={<Wraria />} />
        <Route path='/Misthodosia' element={<Misthodosia />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/LoginPage' element={<LoginPage />} />
      </Routes>
    </UserProvider>
  );
}
export default App;