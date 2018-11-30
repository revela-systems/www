#!/bin/bash

echo "Building sources"
cd source/ 
npm run build

echo "Deploying to staging server with Surge"
npx surge -p ../docs -d https://revela.surge.sh
