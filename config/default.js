const packageJson = require('../package.json');
require('dotenv').config()

module.exports = {
  app: {
    name: packageJson.name,
    version: packageJson.version,
  },
  server: {
    port: parseInt(process.env.PORT) || 3000,
  },
  postgres: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    db: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM,
    secure: process.env.SMTP_SECURE === 'true',
  },
};