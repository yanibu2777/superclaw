#!/usr/bin/env node

// Demo script showing the wizard in action
const { runWizard } = require('../cli/wizard');
const fs = require('fs-extra');
const path = require('path');

console.log('🚀 CLAWDBOT ONBOARDING WIZARD - LIVE DEMO\n');

async function runDemo() {
  try {
    // Clean up any existing demo workspace
    const demoPath = path.join(__dirname, 'demo-workspace');
    if (await fs.pathExists(demoPath)) {
      await fs.remove(demoPath);
    }

    console.log('📋 Creating a founder AI employee workspace...\n');

    // Create a realistic founder configuration
    const demoConfig = {
      user: {
        type: 'founder',
        goals: ['metrics', 'investors', 'team', 'competitors'],
        experience: 'intermediate'
      },
      template: {
        name: 'Startup Founder',
        skills: ['github', 'notion', 'slack', 'trello', 'analytics'],
        automations: {
          morning_brief: {
            schedule: '8:00 AM daily',
            includes: ['revenue_metrics', 'user_growth', 'team_updates', 'competitor_news']
          },
          investor_updates: {
            schedule: 'Weekly Friday 4:00 PM',
            includes: ['key_metrics', 'milestones_achieved', 'challenges_blockers']
          }
        }
      },
      integrations: {
        email: { provider: 'gmail' },
        calendar: { provider: 'google' },
        slack: { features: ['team_updates'] },
        analytics: { provider: 'google' }
      },
      workspace: {
        name: 'founder-ai-employee',
        description: 'AI employee setup for startup founder',
        skills: ['github', 'notion', 'slack', 'trello', 'analytics']
      },
      created: new Date().toISOString()
    };

    // Generate the actual workspace
    const { generateSetup } = require('../cli/setup');
    await generateSetup(demoConfig, demoPath);

    console.log('✅ Demo workspace created successfully!\n');

    console.log('📁 Generated files:');
    const files = await fs.readdir(demoPath, { recursive: true });
    for (const file of files) {
      const filePath = path.join(demoPath, file);
      const stats = await fs.stat(filePath);
      if (stats.isFile()) {
        console.log(`   📄 ${file}`);
      } else {
        console.log(`   📁 ${file}/`);
      }
    }

    console.log('\n📋 Sample configuration file:');
    const configPath = path.join(demoPath, 'config', 'clawdbot.yaml');
    if (await fs.pathExists(configPath)) {
      const configContent = await fs.readFile(configPath, 'utf8');
      console.log('```yaml');
      console.log(configContent.slice(0, 500) + (configContent.length > 500 ? '...' : ''));
      console.log('```\n');
    }

    console.log('📋 Sample morning brief:');
    const briefPath = path.join(demoPath, 'morning-brief.md');
    if (await fs.pathExists(briefPath)) {
      const briefContent = await fs.readFile(briefPath, 'utf8');
      console.log('```markdown');
      console.log(briefContent.slice(0, 400) + '...');
      console.log('```\n');
    }

    console.log('🎉 DEMO COMPLETE!');
    console.log('\nThis demonstrates that the wizard can:');
    console.log('✅ Generate complete Clawdbot workspace structure');
    console.log('✅ Create user-specific configuration files');  
    console.log('✅ Set up automations and workflows');
    console.log('✅ Generate documentation and initial content');
    console.log('✅ Provide ready-to-use AI employee setup');

    console.log('\n🚀 The wizard is ready for real users!');

  } catch (error) {
    console.error('❌ Demo failed:', error.message);
    throw error;
  }
}

// Run demo if this file is executed directly
if (require.main === module) {
  runDemo().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { runDemo };