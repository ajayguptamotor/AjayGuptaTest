import React, { useState } from 'react';

function AddCandidateForm({ addCandidate }) {
  const [candidateName, setCandidateName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (candidateName) {
      addCandidate(candidateName);
      setCandidateName('');
    }
  };

  return (
    <div className="add-candidate-form">
      <h2>Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={candidateName} 
          onChange={(e) => setCandidateName(e.target.value)} 
          placeholder="Candidate name" 
        />
        <button type="submit">Add Candidate</button>
      </form>
    </div>
  );
}

export default AddCandidateForm;
