#!/bin/bash
# Setup script for Git Bash - Add Node.js to PATH

# Add Node.js to PATH if not already present
if [[ ":$PATH:" != *":/c/Program Files/nodejs:"* ]]; then
    export PATH="/c/Program Files/nodejs:$PATH"
    echo "✓ Added Node.js to PATH"
else
    echo "✓ Node.js already in PATH"
fi

# Verify npm is available
if command -v npm &> /dev/null; then
    echo "✓ npm is available: $(npm --version)"
    echo "✓ node is available: $(node --version)"
else
    echo "✗ npm is still not found. Please restart Git Bash."
fi

