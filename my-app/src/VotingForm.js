import React, { useState } from 'react';

function VotingForm({ voters, candidates, onVote }) {
  const [selectedVoter, setSelectedVoter] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVoter && selectedCandidate) {
      onVote(selectedVoter, selectedCandidate);
      setSelectedVoter('');
      setSelectedCandidate('');
    }
  };

  return (
    <div className="voting-form">
      <h2>Vote!</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedVoter} onChange={(e) => setSelectedVoter(e.target.value)}>
          <option value="">I am</option>
          {voters.filter(voter => !voter.hasVoted).map(voter => (
            <option key={voter.name} value={voter.name}>{voter.name}</option>
          ))}
        </select>
        <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
          <option value="">I vote for</option>
          {candidates.map(candidate => (
            <option key={candidate.name} value={candidate.name}>{candidate.name}</option>
          ))}
        </select>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default VotingForm;
