/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition =
  "Git is a version control system to track changes in source code";
console.log("PROBLEM 1");
console.log(gitDefinition);
console.log("_____________________");

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition =
  "GitHub is a website in which an individual can store and manage their code repositories";
console.log("PROBLEM 2");
console.log(gitHubDefinition);
console.log("_____________________");
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition =
  "The git init command initializes a new Git repository so that changes can be tracked";
console.log("PROBLEM 3");
console.log(gitInitDefinition);
console.log("_____________________");

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition =
  "The git clone command creates a copy of an existing repository including all files, directories, and version history from a remote location to the local machine";
console.log("PROBLEM 4");
console.log(gitCloneDefinition);
console.log("_____________________");

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition =
  "The git status command shows the current status of a repository displaying information such all files and if they been modified or ready to be committed.";
console.log("PROBLEM 5");
console.log(gitStatusDefinition);
console.log("_____________________");

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition =
  "The git add command adds files that will be tracked to prepare for them to be committed";
let gitAddCode = "git add .";
console.log("PROBLEM 6");
console.log(gitAddDefinition);
console.log(`The gitAddCode variable is: ${gitAddCode}`);
console.log("_____________________");

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition =
  "The git commit command adds files that will be tracked to prepare for them to be committed";
let gitCommitCode = `git commit -m "initial commit"`;
console.log("PROBLEM 7");
console.log(gitCommitDefinition);
console.log(`The gitCommitCode variable is: ${gitCommitCode}`);
console.log("_____________________");

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition =
  "The git push command uploads a local repository content and changes to a remote repository such as GitHub";
console.log("PROBLEM 8");
console.log(gitPushDefinition);
console.log("_____________________");
