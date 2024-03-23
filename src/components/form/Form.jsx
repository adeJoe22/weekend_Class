import React, { useState } from 'react';
import './form.css';

export default function Form({ formSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    imgUrl: '',
    message: '',
  });

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [imgUrl, setImgUrl] = useState('');
  // const [message, setMessage] = useState('');

  // const nameOnchange = (e) => setUsername(e.target.value);
  // const emailOnchange = (e) => setEmail(e.target.value);
  // const messgeOnchange = (e) => setMessage(e.target.value);
  // const imgUrlOnchange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setImgUrl(url);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'imgUrl' ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    formSubmit(formData);
  };

  return (
    <div>
      <form id="container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <input type="file" onChange={handleChange} name="imgUrl" />
        {formData.imgUrl && <img src={formData.imgUrl} alt="image" />}
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          name="message"
        ></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
}

// email: 'bb@gmail.com';
// imgUrl: 'blob:http://localhost:5173/90ab93b9-ee6a-438a-b9e7-5eb6392bfd8a';
// message: 'Hey I am doing great';
// username: 'Bukola Blessing';
