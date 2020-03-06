// index.js
const cron = require("node-cron"); // schedule tasks for different intervals
const express = require("express");
const fs = require("fs");

app = express();


// After a while, we want to delete the error log files at intervals without having to do it physically.
// We will change this to adding and removing local .CSV file after processing and storing them in PowerBI and or a SQL Database
// schedule tasks to be run on the server   


// schedule tasks to be run on the server
// cron.schedule("10 * * * *", function() {    // Deleted every 21st day (https://www.npmjs.com/package/node-cron)
//     console.log("---------------------");
//     console.log("Running Cron Job...");
//     fs.unlink("./error.log", err => {
//         if (err) throw err;
//         console.log("Error file succesfully deleted");
//     });
// });

var task = cron.schedule('* * * * *', () => {
    console.log('Running a job every minute at America/New_York timezone');
    console.log("---------------------");
    console.log("Running Cron Job...");
    // try {
    //     const fileStream = fs.createReadStream(filePath);
    //     res.writeHead(200, { 'content-type': 'application/json' });
    //     fileStream.pipe(res);
    //     fs.unlinkSync(filePath);
    //   } catch (err) {
    //     console.log(JSON.stringify(err));
    //     res.sendStatus(404);
    //     res.end();
    //   }
    fs.unlink("./error.log", err => {
        if (err) throw err;
        console.log("Error file succesfully deleted");
    });
}, {
    scheduled: true,
    timezone: "America/New_York"
});

task.start();
app.listen("3128");

// task.stop();


//    * * * * * *
//    | | | | | |
//    | | | | | day of week
//    | | | | month
//    | | | day of month
//    | | hour
//    | minute
//    second ( optional )