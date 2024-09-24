import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ModalForm.css';
import Navbar from './../Navbar/navbar';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { UsernameContext } from './../Pages/UsernameContext';  

export default function ModalForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const { setUser } = useContext(UsernameContext);  

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  function reset() {
    setFormData({
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
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
    navigate('/MainPage');
  };

  const handleFormSwitch = () => {
    reset();
    setIsRegistering(!isRegistering);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = {};

    if (isRegistering) {
      if (!formData.username.trim()) {
        validationErrors.username = 'Username is required';
      } else if (formData.username.length < 5) {
        validationErrors.username = 'Username must be at least 5 characters';
      }
      if (!formData.email.trim()) {
        validationErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = 'Email is not valid';
      }
      if (!formData.password.trim()) {
        validationErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        validationErrors.password = 'Password must be at least 6 characters';
      }
      if (!formData.confirmPassword.trim()) {
        validationErrors.confirmPassword = 'Passwords is required';
      } else if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = 'Passwords do not match';
      }
    } else {
      if (!formData.username.trim()) {
        validationErrors.username = 'Username is required';
      }
      if (!formData.password.trim()) {
        validationErrors.password = 'Password is required';
      }
    }
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted Successfully');
      setUser(formData.username);  // Set the username after validation
      handleLoginClick();
      reset();
    }
  }

  return (
    <>
      <div className="modal show ModalCustom" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content FullModal">
            <div className='header-title'>
              <h1 className="modal-title fs-5 d-flex justify-content-center w-100" id="exampleModalLabel" style={{ paddingBottom: "5px" }}>
                {isRegistering ? 'Δημιουργία Λογαριασμού' : 'Είσοδος'}
              </h1>
            </div>
            <div className="modal-body">
              <form id='form' onSubmit={handleSubmit}>
                {isRegistering ? (
                  <>
                    {/* Username Input */}
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="registerUsername"
                        placeholder="Όνομα χρήστη"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                      {errors.username && <span className="error">{errors.username}</span>}
                      <label htmlFor="registerUsername">Όνομα χρήστη</label>
                    </div>
                    {/* Email Input */}
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="registerEmail"
                        placeholder="Εισάγετε το email σας"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="error">{errors.email}</span>}
                      <label htmlFor="registerEmail">Εισάγετε το email σας</label>
                    </div>
                    {/* Password Input */}
                    <div className="form-floating mb-3 position-relative">
                      <input
                        type={showPassword ? "text" : "password"} 
                        className="form-control"
                        id="registerPassword"
                        placeholder="Κωδικός"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <span className="error">{errors.password}</span>}
                      <label htmlFor="registerPassword">Κωδικός</label>
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
                    {/* Confirm Password Input */}
                    <div className="form-floating mb-3 position-relative">
                      <input
                        type={showPassword ? "text" : "password"} 
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Επαληθεύστε τον κωδικό σας"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                      <label htmlFor="confirmPassword">Επαληθεύστε τον κωδικό σας</label>
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
                  </>
                ) : (
                  <>
                    {/* Username Input */}
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
                    {/* Password Input */}
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
                  </>
                )}
                <div className="modal-footer modalbtn">
                  <div className="d-flex justify-content-center w-100">
                    <button className="btn py-2 btnlogin" type="submit">
                      {isRegistering ? 'Register' : 'Login'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center w-100">
                <span className='spantext'>
                  {isRegistering ? 'Already have an account? ' : 'Don\'t have an account? '}
                  <Link to="#" onClick={handleFormSwitch} className="btn btn-link btnlogin2">
                    {isRegistering ? 'Sign in' : 'Sign up'}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}