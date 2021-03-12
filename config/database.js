module.exports = ({ env }) => {
  const nodeEnv = env("NODE_ENV", "development");
  switch(nodeEnv) {
    case 'production':
      return require("./environments/production/database")({ env });

    case 'development':
      return require("./environments/development/database")({ env });
  }
};
