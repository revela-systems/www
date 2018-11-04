#!/bin/bash

echo "Deploying to staging server with Surge"
npx surge -p docs -d https://revela.surge.sh
