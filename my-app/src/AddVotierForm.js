import React, { useState } from 'react';

function AddVoterForm({ addVoter }) {
  const [voterName, setVoterName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (voterName) {
      addVoter(voterName);
      setVoterName('');
    }
  };

  return (
    <div className="add-voter-form">
      <h2>Add Voter</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={voterName} 
          onChange={(e) => setVoterName(e.target.value)} 
          placeholder="Voter name" 
        />
        <button type="submit">Add Voter</button>
      </form>
    </div>
  );
}

export default AddVoterForm;
