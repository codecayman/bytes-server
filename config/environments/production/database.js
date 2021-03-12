module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "strapi-bytes",
      "settings": {
        "client": env('DATABASE_CLIENT', 'sqlite'),
        "host": env('DATABASE_HOST', '127.0.0.1'),
        "port": env('DATABASE_PORT', 27017),
        "database": env('DATABASE_NAME', 'strapi'),
        "username": env('DATABASE_USERNAME', ''),
        "password": env('DATABASE_PASSWORD', ''),
      },
      "options": {
        "ssl": env('DATABASE_SSL', false),
      }
    }
  }
});
