import React, { useState } from 'react';

function PersonForm({ addPerson }) {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson({ name, state, phoneNumber });
    setName('');
    setState('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名字:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>State:</label>
        <input 
          type="text" 
          value={state} 
          onChange={(e) => setState(e.target.value)} 
        />
      </div>
      <div>
        <label>电话号码:</label>
        <input 
          type="text" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
        />
      </div>
      <button type="submit">添加人员</button>
    </form>
  );
}

export default PersonForm;
