#!/bin/bash
set -e

echo "Current directory: $(pwd)"
echo "Files in current directory:"
ls -la

echo "Installing dependencies..."
pip install --upgrade pip
pip install -r ./requirements.txt

echo "Dependencies installed successfully!"
