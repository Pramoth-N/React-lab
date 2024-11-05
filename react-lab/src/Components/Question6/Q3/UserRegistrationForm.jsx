import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    age: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    age: '',
  });

  const validateUsername = (username) => {
    if (!username.match(/^[a-z]{5}$/)) {
      return 'Username must be exactly 5 lowercase letters.';
    }
    return '';
  };

  const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      
      // both are correct validations

      if (!passwordRegex.test(password)) {
    //   if(!password.match(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      return 'Password must be at least 8 characters long, contain 1 uppercase letter and 1 number.';
    }
    return '';
  };

  const validateAge = (age) => {
    const ageInt = parseInt(age, 10);
    if (isNaN(ageInt) || ageInt < 20 || ageInt > 40) {
      return 'Age must be an integer between 20 and 40.';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = '';
    if (name === 'username') error = validateUsername(value);
    if (name === 'password') error = validatePassword(value);
    if (name === 'age') error = validateAge(value);

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);
    const ageError = validateAge(formData.age);

    if (usernameError || passwordError || ageError) {
      setErrors({ username: usernameError, password: passwordError, age: ageError });
    } else {
      alert('Registration successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
      </div>

      <button type="submit" disabled={errors.username || errors.password || errors.age}>
        Register
      </button>
    </form>
  );
};

export default UserRegistrationForm;
