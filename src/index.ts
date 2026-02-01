#!/usr/bin/env node

import { Command } from 'commander';
import { wizardCommand } from './commands/wizard';
import { memoryCommand } from './commands/memory';

const program = new Command();

program
  .name('superclaw')
  .description('Role-based OpenClaw setup wizard with memory management')
  .version('1.0.0');

// Add command groups
program.addCommand(wizardCommand);
program.addCommand(memoryCommand);

// Parse CLI args
program.parse();