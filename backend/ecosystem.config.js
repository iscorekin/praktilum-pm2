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
      'pre-setup': "echo 'commands or local script path to be run on the host before the setup process starts'",
      'post-setup': "echo 'commands or a script path to be run on the host after cloning the repo'",
      'pre-deploy': "echo 'pre-deploy'",
      'post-deploy': "echo 'post-deploy'",
      'pre-deploy-local': "echo 'This is a local executed command'",
    },
  },
};
