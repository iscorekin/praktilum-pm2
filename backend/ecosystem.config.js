require('dotenv').config({ path: '.env.deploy' });

module.exports = {
  apps: [{
    name: 'backend',
    script: 'npm',
    args: 'run start',
  }],

  deploy: {
    production: {
      key: '../praktikum-ubuntu.pem',
      user: process.env.REMOTE_USER,
      host: process.env.REMOTE_HOST,
      ref: process.env.REF,
      repo: process.env.REPO,
      path: process.env.REMOTE_PATH,
      'post-deploy': `cd backend && npm install && scp .env ${process.env.REMOTE_USER}@${process.env.REMOTE_HOST}:${process.env.REMOTE_PATH} && pm2 startOrRestart ecosystem.config.js --env production`,
    },
  },
};
