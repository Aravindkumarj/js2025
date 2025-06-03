const fs = require("fs");
const path = require("path");

// 🔧 Set this to your actual Mac username
const photosPath = "/Users/I058626/Pictures/Photos Library.photoslibrary/originals";

// 🎯 Define supported video extensions
const videoExtensions = [".mov", ".mp4", ".m4v", ".avi", ".mkv"];

function findOldestVideo(dirPath) {
    let oldest = null;

    function scanDir(currentPath) {
        const entries = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                scanDir(fullPath);
            } else {
                const ext = path.extname(entry.name).toLowerCase();

                // ✅ Skip non-video files
                if (!videoExtensions.includes(ext)) continue;

                const stats = fs.statSync(fullPath);

                if (!oldest || stats.birthtime < oldest.time) {
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
        console.log("📹 Oldest video found:");
        console.log("File:", oldest.file);
        console.log("Created:", oldest.time);
    } else {
        console.log("No video files found in the specified folder.");
    }
}

findOldestVideo(photosPath);
