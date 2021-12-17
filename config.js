const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    watchedDir: process.env.WATCHED_DIR,
    destinationDir: process.env.DESTINATION_DIR,
    fileExt: process.env.FILE_EXTENSION
};