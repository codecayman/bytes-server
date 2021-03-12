module.exports = ({ env }) => {
  const nodeEnv = env("NODE_ENV", "development");
  switch(nodeEnv) {
    case 'production':
      return require("./environments/production/server")({ env });

    case 'development':
      return require("./environments/development/server")({ env });
  }
};
