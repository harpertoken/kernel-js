#!/bin/bash

# Script to rewrite commit messages in git history for conventional commit cleanup
# - Lowercases the first line
# - Truncates first line to 60 characters
# - Preserves the rest of the message

# WARNING: This will rewrite git history. Make sure to backup and coordinate with team.

echo "Rewriting commit messages in git history..."
echo "This will lowercase and truncate first lines to 60 chars."

read -p "Are you sure? This will force-push after. (y/N): " confirm
if [[ $confirm != [yY] ]]; then
    echo "Aborted."
    exit 1
fi

# Use git filter-branch to rewrite messages
git filter-branch -f --msg-filter 'awk '\''{if (NR==1) {line = tolower($0); print substr(line,1,60)} else {print}}'\''' -- --all

echo "History rewritten. Force-pushing..."
git push --force --all