import React, { useState } from 'react';
import './Display.css';
import Form from '../form/Form';
import List from '../list/List';
export default function Display() {
  const [formList, setFormList] = useState([]);

  const handleFormSubmit = (formData) => {
    setFormList((prevData) => [...prevData, formData]);
  };

  const handleDelete = (index) => {
    setFormList((prevData) => prevData.filter((data, i) => i !== index));
  };

  return (
    <div className="container">
      <Form formSubmit={handleFormSubmit} />
      <List formInfo={formList} onDelete={handleDelete} />
    </div>
  );
}
