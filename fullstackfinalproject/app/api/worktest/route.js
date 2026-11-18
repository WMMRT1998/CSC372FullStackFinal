// app/api/worktest/route.js
import {getAllEntries, createEntry} from '../../../model';

export async function GET() {
  const entries = await getAllEntries();
  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request) {
  const { teamLeader, press, date, crew } = await request.json();
  if (teamLeader == null || press == null || date == null || crew == null) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  const newEntry = await createEntry(teamLeader, press, date, crew);
  return new Response(JSON.stringify(newEntry), {
    headers: { 'Content-Type': 'application/json' }
  });
}


