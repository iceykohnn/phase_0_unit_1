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
What parts of your strategy worked? What problems did you face?
---- I didn't really face any challenges on this one, I just had to find the definitions and make sure that I understood them, so that I could explain them.
What questions did you have while coding? What resources did you find to help you answer them?
----- This challenge wasn't really about coding, but the questions I faced while practicing were how to use bash to locate which files and folders I was in and what was available. I use pwd to find my location, and ls -la to show me what's in the folder I'm in .
What concepts are you having trouble with, or did you just figure something out? If so, what?
---- I'm not having much trouble with this aspect of the challenge. 
Did you learn any new skills or tricks?
---- Like I said, I learned how to use the pwd command and the ls -la command to show me where I'm at and list the contents of where I'm at. I like using git status often to show me what is going on in that particular file.
How confident are you with each of the Learning Competencies?
---- I'm prettty confident with this part of the challenge. I think with more practice using Git, I will feel better with it.
Which parts of the challenge did you enjoy?
---- There wasn't much to enjoy, just getting the explanations down pat.
Which parts of the challenge did you find tedious?
---- Using bash, and trying to find out how to navigate in it was necessary to understanding this challenge.
