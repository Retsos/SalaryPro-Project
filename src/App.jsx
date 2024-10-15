import React from 'react';
import Employee from './Components/Pages/Employee';
import Home from './Components/Pages/Home';
import Employers from './Components/Pages/Employers';
import LoginPage from './Components/Pages/LoginPage';
import Contact from './Components/Pages/Contact';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import { UserProvider } from './Components/Pages/UsernameContext';
import Wraria from './Components/Pages/Wraria';  

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Employee' element={<MainPage><Employee /></MainPage>} />
        <Route path='/Employers' element={<MainPage><Employers /></MainPage>} />
        <Route path='/Wraria' element={<MainPage><Wraria /></MainPage>} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/MainPage' element={<MainPage />} />
      </Routes>
    </UserProvider>
  );
}
export default App;
