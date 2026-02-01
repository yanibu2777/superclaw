# SuperClaw CLI

Unified CLI for role-based OpenClaw setup wizard with memory management.

## Installation

```bash
npm install
npm run build
```

## Usage

### Wizard Commands
```bash
# Run the setup wizard
superclaw wizard --role founder

# List available templates
superclaw wizard list
```

### Memory Commands
```bash
# Save information to memory
superclaw memory save "User prefers dark mode" --type preference

# Search memories
superclaw memory search "dark mode"

# Recall context
superclaw memory recall "UI preferences"

# View memory statistics
superclaw memory stats
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build TypeScript
npm run build

# Run tests
npm test
```

## Structure

- `src/` - TypeScript source code
  - `commands/` - CLI command implementations
  - `lib/` - Core logic libraries
  - `types/` - TypeScript type definitions
- `bin/` - Executable entry point
- `dist/` - Compiled JavaScript output
- `tests/` - Test files

## Commands

### Wizard
Role-based setup wizard for OpenClaw configurations:
- Founder templates
- Engineer workflows  
- Creator tools
- Student environments

### Memory
Memory management for persistent context:
- Save important information
- Search through memories
- Recall relevant context
- View statistics

## Framework

Built with:
- Commander.js for CLI framework
- TypeScript for type safety
- Jest for testing
- Inquirer for interactive prompts
- Chalk for colored output