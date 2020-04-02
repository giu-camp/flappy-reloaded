## STAGE & SNAPSHOT
### Working with snapshots and the Git staging area
git status
### show modified files in working directory, staged for your next commit
git add [file]
### add a file as it looks now to your next commit (stage)
git reset [file]
### unstage a file while retaining the changes in working directory
git diff
### diff of what is changed but not staged
git diff --staged
### diff of what is staged but not yet commited
git commit -m “[descriptive message]”
commit your staged content as a new commit snapshot


## SETUP
### Configuring user information used across all local repositories
git config --global user.name “[firstname lastname]”
### set a name that is identifiable for credit when review version history
git config --global user.email “[valid-email]”
### set an email address that will be associated with each history marker
git config --global color.ui auto
### set automatic command line coloring for Git for easy reviewing

## SETUP & INIT
### Configuring user information, initializing and cloning repositories
git init
### initialize an existing directory as a Git repository
git clone [url]
retrieve an entire repository from a hosted location via URL
