/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

// Task Automation Tool - A TypeScript-based CLI tool for automating file tasks

import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';

const program = new Command();

// Rename files in a directory
program
  .command('rename <directory> <prefix>')
  .description('Rename all files in the specified directory by adding a prefix')
  .action((directory, prefix) => {
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, `${prefix}-${file}`);
        fs.rename(oldPath, newPath, err => {
          if (err) throw err;
          console.log(`Renamed: ${oldPath} -> ${newPath}`);
        });
      });
    });
  });

// List files in a directory
program
  .command('list <directory>')
  .description('List all files in the specified directory')
  .action(directory => {
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
      files.forEach(file => console.log(file));
    });
  });

program.parse(process.argv);
