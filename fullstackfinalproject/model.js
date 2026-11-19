// model.js
import pool from './dbConnection.js';

export async function createEntry(teamLeader, press, date, crew, estop) {
  const result = await pool.query(
    'INSERT INTO workchecklist (teamLeader, press, date, crew, estop) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [teamLeader, press, date, crew, estop || null]
  );
  return result.rows[0];
}

export async function getAllEntries() {
  const result = await pool.query('SELECT * FROM workchecklist');
  return result.rows;
}

export async function getEntryById(entryId) {
  const result = await pool.query('SELECT * FROM workchecklist WHERE id = $1', [entryId]);
  return result.rows[0];
}

export async function deleteEntry(entryId) {
  const result = await pool.query('DELETE FROM workchecklist WHERE id = $1 RETURNING *', [entryId]);
  return result.rows[0];
}
