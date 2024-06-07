import React from 'react';

function VoterList({ voters }) {
  return (
    <div className="voter-list">
      <h2>Voters</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Has voted</th>
          </tr>
        </thead>
        <tbody>
          {voters.map(voter => (
            <tr key={voter.name}>
              <td>{voter.name}</td>
              <td>{voter.hasVoted ? '✔' : '✘'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VoterList;
