const cp = require('child_process')
const os = require('os')

module.exports = function () {
  switch (process.platform) {
    case 'win32':
      return process.env.COMPUTERNAME
    case 'darwin':
      return cp.execSync('scutil --get ComputerName').toString().trim()
    default:
      return os.hostname()
  }
}
