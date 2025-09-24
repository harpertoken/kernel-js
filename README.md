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

## Docker

```bash
docker build -t macos-kernel-tool .
docker run macos-kernel-tool
```

Note: In container (Linux), kernel version shows "Unknown" as git repo not included.

## License

MIT