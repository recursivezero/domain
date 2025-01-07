const { execSync } = require("child_process");
const fs = require("fs");

// Get the current branch name
const branchName = execSync("git branch --show-current").toString().trim();

// Get the commit message file path
const commitMsgFile = process.argv[2];

// Read the commit message
let commitMsg = fs.readFileSync(commitMsgFile, "utf8").trim();

// Append the branch name to the commit message
const newCommitMsg = `${commitMsg} [${branchName}]`;

// Write the new commit message back to the file
fs.writeFileSync(commitMsgFile, newCommitMsg);
