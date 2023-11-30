const { MongoClient } = require('mongodb');
const config = require('./config');

// eslint-disable-next-line no-unused-vars
const { dbUrl } = config;
const client = new MongoClient(config.dbUrl);

async function connect() {
  try {
    await client.connect();
    const db = client.db('burguer-queen');
    console.log('se eonectó con base de datos');
    return db;
  } catch (error) {
    console.log('erro al conectar con base de datos');
  }
}

module.exports = { connect };
