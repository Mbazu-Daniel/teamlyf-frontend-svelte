
## Table of Contents

- [Table of Contents](#table-of-contents)
- [How to Kickstart ](#how-to-kickstart-)
- [Commit Message Format ](#commit-message-format-)
  - [Format](#format)



## How to Kickstart <a name="how-to-kickstart"></a>

To contribute to FreeAPI, please follow these guidelines:

1. Clone the repository to your local machine.
2. Create a new branch : `git checkout -b feat/your-feature-name` or `git checkout -b fix/your-bug-fix-name` and make your changes.
3. Run all the tests 🧪 before committing the changes and make sure all tests are passed.
4. After all tests are passed, commit your changes with a descriptive messages: `git commit -am 'add your commit message'`.
5. Push your changes to your branch: `git push origin feat/your-feature-name`.
6. Submit a pull request to the dev repository.

## Commit Message Format <a name="commit-message-format"></a>

We follow the conventional commit message format to provide a clear and standardized history of our project's changes. Each commit message should consist of a type and a descriptive message.

| Type   | Heading | Rule                                       | Description                                                                       |
| ------ | ------- | ------------------------------------------ | --------------------------------------------------------------------------------- |
| ci     | CI      | Continuous Integration                     | Changes related to continuous integration.                                        |
| chore  | Chore   | Maintenance tasks                          | Other changes that don't affect production.                                       |
| docs   | Docs    | Documentation                              | Changes related to documentation.                                                 |
| feat   | Feature | New Feature                                | New feature implementations or additions.                                         |
| fix    | Fix     | Bug Fixes                                  | Bug fixes or corrections.                                                         |
| perf   | Perf    | Performance Improvements                   | Performance-related improvements.                                                 |
| refactor | Refactor  | Code Refactoring                           | Code changes that don't fix bugs or add features, but improve the code structure. |
| revert | Revert  | Revert Previous Commits                    | Reverting previous commits.                                                       |
| style  | Style   | Code Formatting or Style                   | Changes related to code formatting or style.                                      |
| assets | Assets  | Add or Update Assets (e.g., images, files) | Changes related to adding or updating assets, such as images or other files.      |


### Format

The commit message should start with the type, followed by a colon and a space, and then the descriptive message in present tense.

Example:

- feat: add user authentication feature
- fix: correct typo in README

Please adhere to this format when making commits. This will help us maintain a clean and organized commit history.
