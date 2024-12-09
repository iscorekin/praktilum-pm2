#!/bin/bash

npm install
pm2 startOrRestart ecosystem.config.js --env production
echo "Post-deploy tasks completed."