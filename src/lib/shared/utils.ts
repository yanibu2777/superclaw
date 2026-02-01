// Shared utilities for wizard and memory components

export class Logger {
  static info(message: string): void {
    console.log(`ℹ️  ${message}`);
  }

  static error(message: string): void {
    console.error(`❌ ${message}`);
  }

  static success(message: string): void {
    console.log(`✅ ${message}`);
  }
}

export class FileUtils {
  // TODO: Shared file operations
}

export class ConfigUtils {
  // TODO: Shared configuration helpers
}