import React from 'react';

function CandidateList({ candidates }) {
  return (
    <div className="candidate-list">
      <h2>Candidates</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.name}>
              <td>{candidate.name}</td>
              <td>{candidate.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateList;
