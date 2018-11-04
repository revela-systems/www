#!/bin/bash

echo "Building.."
cd source
gulp build

echo "Deploying to staging server with Surge"
surge -p ./docs -d https://revela.surge.sh
