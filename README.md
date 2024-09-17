
# Task Automation Tool

## Project Overview
This project, created by **Jerry Tan**, is a TypeScript-based Command-Line Interface (CLI) tool designed to automate file operations such as renaming and listing files in a directory. It showcases the use of TypeScript for building maintainable and efficient automation tools.

## Features
- **File Renaming**: Add a prefix to all files in a directory.
- **File Listing**: List all files in a directory.
- **Command-Line Interface (CLI)**: Built using **Commander.js** for user-friendly CLI interactions.
- **TypeScript**: Ensures type safety and maintainability.

## Project Structure
```
TaskAutomationTool/
├── src/
│   └── taskAutomation.ts       # TypeScript source code for the CLI tool
├── package.json                # Node.js project metadata
├── tsconfig.json               # TypeScript configuration
├── .gitignore                  # Git ignore file
└── README.md                   # Project documentation
```

## How to Build and Run
### Prerequisites:
- **Node.js** and **npm** should be installed on your system.

### Steps:
1. Install the dependencies:
   ```bash
   npm install
   ```

2. Build the TypeScript code:
   ```bash
   npm run build
   ```

3. Run the tool:
   ```bash
   node dist/taskAutomation.js <command>
   ```

### Available Commands:
- **Rename Files**: Add a prefix to all files in a directory.
  ```bash
  node dist/taskAutomation.js rename <directory> <prefix>
  ```

- **List Files**: List all files in a directory.
  ```bash
  node dist/taskAutomation.js list <directory>
  ```

## Future Enhancements
1. **File Type Filtering**: Add the ability to rename or list files of specific types (e.g., `.txt`, `.js`).
2. **Directory Recursion**: Allow renaming and listing files recursively within subdirectories.
3. **Task Scheduling**: Implement a feature to schedule file operations at specific times.
4. **Enhanced Logging**: Add logging for better error tracking and monitoring.

## License
```
© 2024 Jerry Tan. All Rights Reserved.

This software is the confidential and proprietary information of Jerry Tan ("Confidential Information"). You shall not disclose such Confidential Information and shall use it only in accordance with the terms under which this software was distributed or otherwise published, and solely for the prior express purposes explicitly communicated and agreed upon, and only for those specific permissible purposes.

This software is provided "AS IS," without a warranty of any kind. All express or implied conditions, representations, and warranties, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent that such disclaimers are held to be legally invalid.
```

## Author
**Jerry Tan**

A software developer with a passion for building developer tools and task automation systems using modern TypeScript and Node.js.
