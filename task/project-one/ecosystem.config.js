module.exports = {
  apps: [
    {
      name: 'express-app',
      script: 'yarn',
      args: 'start',
      cwd: './express-app',
      env: {
        PORT: 8080,
      },
    },
    {
      name: 'react-app',
      script: 'yarn',
      args: 'start',
      cwd: './my-react-app',
    },
    {
      name: 'express-app',
      script: 'yarn',
      args: 'start',
      cwd: './express-app',
      env: {
        PORT: 8081,
      },
    },
  ],
};
