import React, { useState } from 'react';
import VoterList from './VoterList';
import CandidateList from './CandidateList';
import VotingForm from './VotingForm';
import AddVoterForm from './AddVotierForm';
import AddCandidateForm from './AddCandidateForm';
import './App.css';

function App() {
  const [voters, setVoters] = useState([
    { name: 'Peppa', hasVoted: false },
    { name: 'Rumcajs', hasVoted: false },
  ]);

  const [candidates, setCandidates] = useState([
    { name: 'Johnny Bravo', votes: 0 },
    { name: 'Pluto', votes: 0 },
  ]);

  const addVoter = (voterName) => {
    setVoters([...voters, { name: voterName, hasVoted: false }]);
  };

  const addCandidate = (candidateName) => {
    setCandidates([...candidates, { name: candidateName, votes: 0 }]);
  };




  const handleVote = (voterName, candidateName) => {
    setVoters(voters.map(voter => 
      voter.name === voterName ? { ...voter, hasVoted: true } : voter
    ));
    setCandidates(candidates.map(candidate => 
      candidate.name === candidateName ? { ...candidate, votes: candidate.votes + 1 } : candidate
    ));



  };

  return (
    <div className="App">
      <h1>Voting App</h1>
      <div className="tables">
        <VoterList voters={voters} />
        <CandidateList candidates={candidates} />
      </div>
      <div className="forms">
        <VotingForm voters={voters} candidates={candidates} onVote={handleVote} />
        <AddVoterForm addVoter={addVoter} />
        <AddCandidateForm addCandidate={addCandidate} />
      </div>
    </div>
  );
}
export default App;
