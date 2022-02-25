const createEventLogSchema = async (sql) => {
    await sql`CREATE SCHEMA IF NOT EXISTS event_log`
}

const createReadingsTable = async (sql) => {
    await sql`
    CREATE TABLE IF NOT EXISTS event_log.readings (
        time             timestamptz,
        tags_id          integer,
        name             text,
        latitude         double precision,
        longitude        double precision,
        elevation        double precision,
        velocity         double precision,
        heading          double precision,
        grade            double precision,
        fuel_consumption double precision,
        additional_tags  jsonb
    )`

    await sql`CREATE INDEX IF NOT EXISTS readings_latitude_time_idx ON event_log.readings USING btree (latitude, time DESC)`
    await sql`CREATE INDEX IF NOT EXISTS readings_tags_id_time_idx ON event_log.readings USING btree (tags_id, time DESC)`
    await sql`CREATE INDEX IF NOT EXISTS readings_time_idx ON event_log.readings USING btree (time DESC)`
}

const createEventLog = async sql => {
    await createEventLogSchema(sql)
    await createReadingsTable(sql)
}

const dropEventLog = async sql => {
    await sql`drop table event_log.readings`
    await sql`drop schema event_log`
}

const resetEventLog = async sql => {
    await dropEventLog(sql)
    await createEventLog(sql)
}


exports.createEventLog = createEventLog;
exports.resetEventLog = resetEventLog;
exports.dropEventLog = dropEventLog;
