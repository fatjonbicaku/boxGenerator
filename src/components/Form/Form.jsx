
import React, { useState } from 'react';
import styles from './form.module.css';

function Form({ addBox }) {
  const [formData, setFormData] = useState({
    color: '',
    size: ''
  });

  const getDetails = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newBox = {
      color: formData.color,
      size: formData.size
    };
    addBox(newBox); 
    setFormData({ color: '', size: '' }); 
  };

  return (
    <form onSubmit={submitForm} className={styles.container}>
      <p>Color</p>
      <input type="text" name="color" value={formData.color} onChange={getDetails} />
      <p>Box Size</p>
      <input type="text" name="size" value={formData.size} onChange={getDetails} />
      <button>Add</button>
    </form>
  );
}

export default Form;
