# Atlassian Query Tool 

🔎📇📈Atlassian Query Tool  is a NodeJS application for fetching data from JIRA to excel

## Installation

Use the package manager [npm](https://api.slack.com/bot-users) to get started with a Slack Slash Command.

```bash
npm install atlassianQueryTool
```

## Usage

We set up our application by adding the below code:

```javascript

var searchString="project='okrs' and ((createdDate<='2025/11/1' and createdDate>='2025/3/1') or (updatedDate <='2025/11/1' and updatedDate >='2025/3/1')) "
jira.searchJira(searchString).then(function(issue) {
    var fields = ['ISSUE_Number', 'TITLE', 'STATUS'];
    var myISSUE=[];
    for(let i=0; i<issue.total ;i++ ) {
        myISSUE.push(
            {
                "ISSUE_Number":issue.issues[i].key,
                "TITLE": issue.issues[i].fields.status.name,
                "STATUS": issue.issues[i].fields.summary,
            }
        )
    };
    var csv = json2csv({ data: myISSUE});
    fs.writeFile('file.csv', csv, function(err) {
        if (err) throw err;
            console.log('file saved');
        });
    })
    .catch(function(err) {
        console.error(err);
    }
);

```

## Built With :hammer_and_wrench:

* [NodeJS](https://nodejs.org/en/docs/) - a JavaScript runtime built on Chrome's V8 JavaScript engine. Version 12.16.1 LTS
* [Express](https://expressjs.com/en/starter/installing.html) - Dependency Management. Default package manager for the JS runtime environment Node.js
* [fs](https://nodejs.dev/the-nodejs-fs-module) - module provides a lot of very useful functionality to access and interact with the file system.
* [Node-Cron](https://github.com/node-cron/node-cron) - A simple cron-like job scheduler for Node.js
* [NPM](https://docs.npmjs.com/) - Dependency Management. Default package manager for the JS runtime environment Node.js
* [Jasmine](https://jasmine.github.io/setup/nodejs.html) - A behavior-driven development framework for testing JavaScript code.
* [Nodemon](https://github.com/remy/nodemon#nodemon) - A utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.[devDependency]
* [Atlassian API](https://developer.atlassian.com/server/jira/platform/rest-apis/) - a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management API

* [ES6/ES7](http://es6-features.org/#Constants | https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/ECMAScript_Next_support_in_Mozilla#ECMAScript_2017) - ECMAScript Next refers to new features of the ECMA-262 standard (commonly referred to as JavaScript) introduced after ECMAScript 2015. New versions of ECMAScript specifications are released yearly.

## Contributing :open_hands:
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors :book:
* **Jake Westerfield** - *Primary Work*

## License :microscope:
[MIT](https://choosealicense.com/licenses/mit/)