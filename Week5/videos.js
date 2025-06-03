const fs = require("fs");
const path = require("path");

const photosPath = "/Users/I058626/Pictures/Photos Library.photoslibrary/originals";

function findOldestFile(dirPath) {
    let oldest = null;

    function scanDir(currentPath) {
        const entries = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                scanDir(fullPath);
            } else {
                const stats = fs.statSync(fullPath);

                if (
                    !oldest ||
                    stats.birthtime < oldest.time
                ) {
                    oldest = {
                        file: fullPath,
                        time: stats.birthtime,
                    };
                }
            }
        }
    }

    scanDir(dirPath);

    if (oldest) {
        console.log("Oldest file found:");
        console.log("File:", oldest.file);
        console.log("Created:", oldest.time);
    } else {
        console.log("No files found.");
    }
}

findOldestFile(photosPath);
