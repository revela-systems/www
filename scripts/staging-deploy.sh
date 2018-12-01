#!/bin/bash

echo "Installing packages"
cd source/
npm install

echo "Building sources"
npm run build

echo "Deploying to staging server with Surge"
npm surge -p ../docs -d https://revela.surge.sh
