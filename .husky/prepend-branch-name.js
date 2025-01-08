import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";

// Get the current branch name
const branchName = execSync("git branch --show-current").toString().trim();

// Get the commit message file path
const commitMsgFile = process.argv[2];

// Read the commit message
let commitMsg = readFileSync(commitMsgFile, "utf8").trim();

// Append the branch name to the commit message
const newCommitMsg = ` [${branchName}]: ${commitMsg}`;

// Write the new commit message back to the file
writeFileSync(commitMsgFile, newCommitMsg);
