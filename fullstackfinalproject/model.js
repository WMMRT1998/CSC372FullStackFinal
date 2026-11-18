// model.js
import pool from './dbConnection.js';

export async function createEntry(teamLeader, press, date, crew) {
  const result = await pool.query(
    'INSERT INTO worktest (teamLeader, press, date, crew) VALUES ($1, $2, $3, $4) RETURNING *',
    [teamLeader, press, date, crew]
  );
  return result.rows[0];
}

export async function getAllEntries() {
  const result = await pool.query('SELECT * FROM worktest');
  return result.rows;
}

export async function getEntryById(entryId) {
  const result = await pool.query('SELECT * FROM worktest WHERE id = $1', [entryId]);
  return result.rows[0];
}

export async function deleteEntry(entryId) {
  const result = await pool.query('DELETE FROM worktest WHERE id = $1 RETURNING *', [entryId]);
  return result.rows[0];
}
