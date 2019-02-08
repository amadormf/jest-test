const fs = require('fs');

class Ls {
  getPaths(paths) {
    if (Array.isArray(paths)) {
      return this.readArray(paths);
    } else if (typeof paths === 'string') {
      return this.readString(paths);
    } else {
      throw new Error('Invalida type for paths argument');
    }
  }

  readArray(paths) {
    return paths.map(this.readString);
  }

  readString(path) {
    return fs.readdirSync(path);
  }
}

module.exports = Ls;
