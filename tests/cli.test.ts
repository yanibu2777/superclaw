import { execSync } from 'child_process';

describe('SuperClaw CLI', () => {
  it('should show version', () => {
    const output = execSync('node bin/superclaw.js --version').toString();
    expect(output.trim()).toMatch(/\d+\.\d+\.\d+/);
  });

  it('should show help', () => {
    const output = execSync('node bin/superclaw.js --help').toString();
    expect(output).toContain('wizard');
    expect(output).toContain('memory');
  });
});