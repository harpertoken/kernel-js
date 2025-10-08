# macOS Kernel Tool (JS)

Node.js CLI to get macOS XNU kernel version.

## Usage

```bash
node index.js [path]
```

## Example

```
Kernel version: xnu-11417.101.15
```

## Requirements

Node.js, Git

## Conventional Commits

This project enforces conventional commit standards for commit messages.

### Setup

To enable the commit-msg hook:

```bash
cp scripts/commit-msg .git/hooks/
chmod +x .git/hooks/commit-msg
```

The hook ensures:
- First line starts with a type (feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert) followed by ': '
- First line is lowercase
- First line is ≤60 characters

### History Cleanup

To clean up existing commit messages (lowercase + truncate first line):

```bash
./scripts/rewrite_msg.sh
```

**Warning:** This rewrites git history and force-pushes. Coordinate with your team.

## Docker

```bash
docker build -t macos-kernel-tool .
docker run macos-kernel-tool
```

Note: In container (Linux), kernel version shows "Unknown" as git repo not included.

## License

MIT