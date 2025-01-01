import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ModalForm.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { UsernameContext } from './../Pages/UsernameContext';  

export default function ModalForm() {
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const { setUser } = useContext(UsernameContext);  

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  function reset() {
    setFormData({
      username: '',
      password: '',
    });
    setErrors({});
  }

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginClick = () => {
    navigate('/Employers');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const GoToCreateAcc = () => {
    navigate('/CreateAcc');
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted Successfully');
      setUser(formData.username);  
      handleLoginClick();
      reset();
    }
  }

  return (
    <div className="modal show ModalCustom" tabIndex="-1" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content FullModal">
          <div className='header-title'>
            <h1 className="modal-title fs-5 d-flex justify-content-center w-100" id="exampleModalLabel" style={{ paddingBottom: "5px" }}>
              Είσοδος
            </h1>
          </div>
          <div className="modal-body">
            <form id='form' onSubmit={handleSubmit}>
              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control"
                  id="loginUsername"
                  placeholder="Όνομα χρήστη"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}
                <label htmlFor="loginUsername">Όνομα χρήστη</label>
              </div>
              <div className="form-floating mb-4 position-relative">
                <input
                  type={showPassword ? "text" : "password"} 
                  className="form-control"
                  id="loginPassword"
                  placeholder="Κωδικός"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
                <label htmlFor="loginPassword">Κωδικός</label>
                {showPassword ? (
                  <IoEye 
                    className="toggle-password-icon"
                    onClick={togglePasswordVisibility}
                    style={{ position: 'absolute', top: '50%', right: '10px', cursor: 'pointer', transform: 'translateY(-50%)' }}
                  />
                ) : (
                  <IoEyeOff 
                    className="toggle-password-icon"
                    onClick={togglePasswordVisibility}
                    style={{ position: 'absolute', top: '50%', right: '10px', cursor: 'pointer', transform: 'translateY(-50%)' }}
                  />
                )}
              </div>
              <div className='forgot-checkbox'>
                <input type="checkbox" id='RememberMe' />
                <label htmlFor="RememberMe">Remember me</label>
                <Link to="#" className="btn forgot">Forgot Password?</Link>
              </div>
              <div className="modal-footer modalbtn">
                <div className="d-flex justify-content-center w-100">
                  <button className="btn py-2 btnlogin" type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <div className="d-flex justify-content-center w-100">
              <span className='spantext'>
                Don't have an account?
                <button to="#" onClick={GoToCreateAcc} className="btn btn-link btnlogin2">Sign Up</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
