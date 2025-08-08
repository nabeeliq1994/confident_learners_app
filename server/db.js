import pg from "pg";

const db = new pg.Pool({
  user: "nabeeliqbal",  // usually your mac username
  host: "localhost",
  database: "confident_learners",
  password: "",               // leave blank if no password
  port: 5432,
});

export default db;