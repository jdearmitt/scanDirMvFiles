const fs = require('fs');
const mv = require('mv');

const fncScanAndMove = (watchedDir, destinationDir, fileExt) => {
    fs.readdir(watchedDir, (err, files) => {
        if(err){
            console.log(err);

        }else{
            for(let file of files){
                if(fncCheckExt(file, fileExt)){
                    fncMoveFile(file, watchedDir, destinationDir);
                };
            };
        };
    });
};

const fncMoveFile = (file, watchedDir, destinationDir) => {
    mv(watchedDir + file, destinationDir + file, (err) => {
        if(err) console.log(err);
    });
};

const fncCheckExt = (fileName, fileExt) => {
    return fileName.split('.').pop().toLowerCase() === fileExt.toLowerCase();
};

module.exports.fncScanAndMove = fncScanAndMove;