const createConduitSchema = async (sql) => {
    await sql`create schema conduit`
}

const createUserTable = async (sql) => {
    await sql`
    CREATE TABLE conduit.user (
        id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        email text NOT NULL UNIQUE,
        username text NOT NULL UNIQUE,
        password text,
        image text,
        bio text,
        CONSTRAINT auto CHECK (NULL::boolean)
    )`
    await sql`CREATE UNIQUE INDEX conduit_user_pkey ON conduit.user(id int4_ops)`
    await sql`CREATE UNIQUE INDEX conduit_user_email_key ON conduit.user(email text_ops)`
    await sql`CREATE UNIQUE INDEX conduit_user_username_key ON conduit.user(username text_ops)`
}

const seedUser = async sql => {
    await sql`
    INSERT INTO conduit.user (email, username, password, bio)
    VALUES ('john@gmail.com', 'john.doe', 'password', 'I love pizza')`
    await sql`
    INSERT INTO conduit.user (email, username, password, bio)
    VALUES ('jane@gmail.com', 'jane.doe', 'password', 'I love burger')`
}

const createArticleTable = async (sql) => {
    await sql`
    CREATE TABLE conduit.article (
        id BIGSERIAL PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        body TEXT NOT NULL,
        author BIGINT REFERENCES conduit.user (id) ON DELETE CASCADE NOT NULL,
        creation_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
    )`

    sql`CREATE UNIQUE INDEX conduit_article_slug_pkey ON conduit.article(slug text_ops)`
}


const seedDb = async sql => {
    await seedUser(sql)
}

const createDb = async sql => {
    await createConduitSchema(sql)
    await createUserTable(sql)
    await createArticleTable(sql)
}

const dropDb = async sql => {
    await sql`drop table conduit.article`
    await sql`drop table conduit.user`
    await sql`drop schema conduit`
}

const resetDb = async sql => {
    await dropDb(sql)
    await createDb(sql)
}


const schema = {
    createDb,
    dropDb,
    seedDb
}



exports.schema = schema
