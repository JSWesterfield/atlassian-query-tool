// index.js
const cron = require("node-cron");
const express = require("express");
const fs = require("fs");

app = express();


// After a while, we want to delete the error log files at intervals without having to do it physically.
// We will change this to adding and removing local .CSV file after processing and storing them in PowerBI and or a SQL Database
// schedule tasks to be run on the server   
cron.schedule("* * * * *", function() {
    console.log("running a task every minute");
});

app.listen(3128);


