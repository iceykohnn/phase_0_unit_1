## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
It adds changes in my files from my working directory to my index
#### branch
<!-- Your defnition here -->
Lists existing branches and creates a new branch if you provide a name
#### checkout
<!-- Your defnition here -->
checks out a different branch by updating the index and working tree to reflect the chosen branch
#### clone
<!-- Your defnition here -->
Clones the target repository making a new copied version for you locally
#### commit
<!-- Your defnition here -->
Takes all of the changes written in the index and creates a new commit object pointing to it and sets the branch to point to that new commit. (locally) You still have to push the commit to the remote repo.
#### fetch
<!-- Your defnition here -->
Fetches all the objects from the remote repository that aren't present in the local one.
#### log
<!-- Your defnition here -->

Shows a list of commits on a branch including details for those commits.
#### merge
<!-- Your defnition here -->
Merges one or more branches into your current branch and automatically creates a new commit but only if there are no conflicts to fix first.
#### pull
<!-- Your defnition here -->
Fetches the files from the remote repository and merges it with your local one, basically making it equal to the git fetch and the git merge commands together. 
#### push
<!-- Your defnition here -->
Pushes all the modified local commits to the remote repository and advances its branches.
#### reset
<!-- Your defnition here -->
Resets your index and working directory to the state of your last commit. 
#### rm
<!-- Your defnition here -->
Removes files from your index and your working directory so they will not be tracked, like putting it in the recycling bin.
#### status
Shows you the status of files in the index versus the working directory. In my current version of Terminal it shows files in red if it sees them but doesn't want to do anything with them, green if you've added them to the working directory.

## Release 4: Git Workflow

- Push files to a remote repository
- I would use the git status, git add "file_name.something", modify it somehow, git commit -m 'my commit message about how i changed it', then git push origin master.
- Fetch changes
- I would find the repo i'm looking for, and use it's name behind the git pull command
- Commit locally
I would modify the file, then use the git commit -m 'my commit message explaining the changes that I made'
## Release 5: Reflection
