// app/books/BookForm.js
'use client';
import { useState } from 'react';
export default function WorkForm() {
  const [teamLeader, setTeamLeader] = useState('');
  const [press, setPress] = useState('');
  const [date, setDate] = useState('');
  const [crew, setCrew] = useState('');
  const [estop, setEstop] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/workchecklist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamLeader, press, date, crew, estop}),
    });
    if (response.ok) {
      setTeamLeader('');
      setPress('');
      setDate('');
      setCrew('');
      setEstop('');
    }
  };
  return (
    <form onSubmit={handleSubmit} id="work-form">
      <input
        type="text" value={teamLeader} onChange={(e) => setTeamLeader(e.target.value)} placeholder="Team Leader"
      />
      <input
        type="text" value={press} onChange={(e) => setPress(e.target.value)} placeholder="Press"
      />
      
      <input
        type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date"
      />
      <input
        type="text" value={crew} onChange={(e) => setCrew(e.target.value)} placeholder="Crew"
      />
      <input
        type="button" value={estop ? new Date(estop).toLocaleTimeString() : 'E-Stop'} onClick={() => setEstop(new Date().toISOString())}
      />
      <button type="submit">Create Work Entry</button>
    </form>
  );
}

