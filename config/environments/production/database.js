module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "mongoose",
      "settings": {
        "host": env('DATABASE_HOST', '127.0.0.1'),
        "srv": env('DATABASE_SRV', false),
        "port": env('DATABASE_PORT', 27017),
        "database": env('DATABASE_NAME', ''),
        "username": env('DATABASE_USERNAME', ''),
        "password": env('DATABASE_PASSWORD', ''),
      },
      "options": {
        "ssl": env('DATABASE_SSL', true),
      }
    }
  }
});
