requestAnimationFrame('dotenv').config()
module.exports = {
  "development": {
    "database": "pakrat_database_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "pakrat_database_test",
    "dialect": "postgres"
  },
  "production": {
    "database": "DATABASE_URL",
    "dialect": "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
