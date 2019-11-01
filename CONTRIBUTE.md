# Contributing Guidelines 👩🏻‍💻👨🏻‍💻

Thank you for collaborating to our coders playlist.

## GIT & GitHub

### Rules

- Don't `push` to master only `pull` from git
- Branch names: `name-of-your-feature`
- Commit messages: Short description describing your action. Ex: `Adds new song to playlist`
- Don't commit the `yarn.lock` file, unless you are installing dependencies to the project

**IMPORTANT:** Please pull before you push

**NOTE:** If you decide to add a song to the playlist. All you need is edit the `App.js` file by copying the `div` that contains the `YouTube` component. `videoId` is the set of letters after the YouTube url. Don't forget to add your name.

### Workflow

After pulling down this repository you will land on the `master` branch

1. PULL to make sure you have the most fresh copy. Use `git pull`
2. Create a new branch `git checkout -b name_of_your_branch`
3. Code some cool stuff or simply add a song 🙃
4. `git add .`
5. `git commit -m "Adds cool song to playlist"`
6. `git push origin name_of_your_branch`
7. Create a PR (pull request) in GitHub and tag an organizer for code review
8. Teammate/organizer will review and merge your code
9. Your branch will be deleted once successfully merged into GitHub master

### Helpful Git Commands

#### Non-changing

- `git status`
- `git log`
- `git branch`
- `git branch -a`
- `git checkout -b branch_name`
- `git checkout branch_name`

#### Changing

- `git add .`
- `git commit -m "Cool message in present tense"`

#### Move Code Around

- `git pull`
- `git push origin branch_name`
