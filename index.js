const config = require('./config');

const file = require('./fileActions');

file.fncScanAndMove(config.watchedDir, config.destinationDir, config.fileExt);

