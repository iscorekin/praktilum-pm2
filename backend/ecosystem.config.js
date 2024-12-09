require('dotenv').config({ path: '.env.deploy' });

module.exports = {
  apps: [{
    name: '2backend',
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
      // 'pre-deploy-local': `scp ./.env ${process.env.REMOTE_USER}@${process.env.REMOTE_HOST}:${process.env.REMOTE_PATH}`,
      // 'post-deploy': 'cd backend && npm i && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
      'post-setup': 'cd backend && npm install && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
