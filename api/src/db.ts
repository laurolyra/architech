const { Client } = require("pg");
const client = new Client();

export const db = client.connect();
