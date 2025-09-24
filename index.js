const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('macOS Kernel Tool - Parse kernel info');

function getKernelVersion(kernelPath) {
  try {
    // Get version from git describe if available
    const gitVersion = execSync('git describe --tags', { cwd: kernelPath, encoding: 'utf8' }).trim();
    return gitVersion;
  } catch (err) {
    // Fallback to latest commit
    try {
      const commit = execSync('git rev-parse HEAD', { cwd: kernelPath, encoding: 'utf8' }).trim();
      return `commit ${commit.substring(0, 8)}`;
    } catch (e) {
      return 'Unknown';
    }
  }
}

// Example usage
const kernelDir = process.argv[2] || '/Users/uploader/Downloads/macos-kernel-dev/xnu';
console.log('Kernel version:', getKernelVersion(kernelDir));