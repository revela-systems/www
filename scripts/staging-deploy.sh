#!/bin/bash

echo "Deploying to staging server with Surge"
surge -p ./docs -d https://revela.surge.sh
