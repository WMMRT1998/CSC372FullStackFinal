// dbConnection.js

import pg from 'pg';

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

await pool.query(`
  CREATE TABLE IF NOT EXISTS workchecklist (
    id SERIAL PRIMARY KEY,
    teamleader TEXT NOT NULL,
    press TEXT NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    crew TEXT,

    -- One-time checks (timestamps)
    estop TIMESTAMPTZ DEFAULT NULL,
    stepladder TIMESTAMPTZ DEFAULT NULL,
    safetyguards TIMESTAMPTZ DEFAULT NULL,
    safeworkarea TIMESTAMPTZ DEFAULT NULL,
    pullrate TIMESTAMPTZ DEFAULT NULL,
    tiedowns TIMESTAMPTZ DEFAULT NULL,
    cycletime TIMESTAMPTZ DEFAULT NULL,
    sprayers TIMESTAMPTZ DEFAULT NULL,
    solidstest TIMESTAMPTZ DEFAULT NULL,
    measuringdevice TIMESTAMPTZ DEFAULT NULL,
    scalecheck TIMESTAMPTZ DEFAULT NULL,
    audit TIMESTAMPTZ DEFAULT NULL,
    loaderbar TIMESTAMPTZ DEFAULT NULL,
    autosprayer TIMESTAMPTZ DEFAULT NULL,
    agitator TIMESTAMPTZ DEFAULT NULL,
    


    -- Recurring checks, beginning, middle, and end of shift 
    platens JSONB DEFAULT '{
      "beginning": false,
      "middle": false,
      "end": false
    }'::jsonb,
    moldlube JSONB DEFAULT '{
      "beginning": false,
      "middle": false,
      "end": false
    }'::jsonb,


    -- Recurring checks, every 2 hours
    moldschedule JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    notclogged JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    sprayerdrip JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    properpallet JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    investigatedefects JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    scrap JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    reportingaccuracy JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    fifo JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb,

    temp JSONB DEFAULT '{
    "hour2": false,
    "hour4": false,
    "hour6": false,
    "hour8": false,
    "hour10": false,
    "hour12": false
    }'::jsonb
  );
`);

export default pool;
