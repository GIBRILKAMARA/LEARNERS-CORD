# Git Bash Setup Instructions

## Quick Fix (Run in Git Bash)

If npm is not found in Git Bash, run this command:

```bash
export PATH="/c/Program Files/nodejs:$PATH"
```

Then verify it works:
```bash
npm --version
node --version
```

## Permanent Fix

A `.bashrc` file has been created in your home directory (`C:\Users\User\.bashrc`) that will automatically add Node.js to your PATH every time you open Git Bash.

**To apply the changes:**
1. Close and reopen Git Bash, OR
2. Run this command in Git Bash:
   ```bash
   source ~/.bashrc
   ```

## Verify Installation

After setting up, run:
```bash
npm --version
node --version
```

Both commands should show version numbers.

## Run Your Project

Once npm is working:
```bash
npm install
npm run dev
```

## Troubleshooting

If npm still doesn't work after restarting Git Bash:

1. **Check if Node.js is installed:**
   ```bash
   ls "/c/Program Files/nodejs"
   ```

2. **Manually add to PATH in current session:**
   ```bash
   export PATH="/c/Program Files/nodejs:$PATH"
   ```

3. **If spaces in path cause issues, try:**
   ```bash
   export PATH="/c/Program\ Files/nodejs:$PATH"
   ```

