const path = require('path');
const fs = require('fs-extra');
const yaml = require('yaml');

async function generateSetup(config, workspacePath) {
  // Create main workspace structure
  await createWorkspaceStructure(workspacePath);
  
  // Generate Clawdbot configuration
  await generateClawdbotConfig(config, workspacePath);
  
  // Generate automation workflows
  await generateAutomations(config, workspacePath);
  
  // Generate README and documentation
  await generateDocumentation(config, workspacePath);
  
  // Generate initial morning brief
  await generateMorningBrief(config, workspacePath);
  
  return workspacePath;
}

async function createWorkspaceStructure(workspacePath) {
  const directories = [
    'config',
    'automations',
    'workflows', 
    'integrations',
    'docs',
    'logs'
  ];
  
  for (const dir of directories) {
    await fs.ensureDir(path.join(workspacePath, dir));
  }
}

async function generateClawdbotConfig(config, workspacePath) {
  const clawdbotConfig = {
    workspace: {
      name: config.workspace.name,
      description: config.workspace.description,
      created: config.created,
      user_type: config.user.type
    },
    skills: config.workspace.skills.map(skill => ({
      name: skill,
      enabled: true,
      auto_install: true
    })),
    integrations: config.integrations,
    automations: config.template.automations,
    workflows: config.template.workflows || []
  };
  
  const configPath = path.join(workspacePath, 'config', 'clawdbot.yaml');
  await fs.writeFile(configPath, yaml.stringify(clawdbotConfig));
  
  return configPath;
}

async function generateAutomations(config, workspacePath) {
  const automationsPath = path.join(workspacePath, 'automations');
  
  // Generate morning brief automation
  const morningBrief = {
    name: 'Morning Intelligence Brief',
    schedule: config.template.automations.morning_brief?.schedule || '8:00 AM daily',
    description: 'Daily briefing with relevant updates and priorities',
    actions: [
      {
        type: 'collect_data',
        sources: config.template.automations.morning_brief?.includes || []
      },
      {
        type: 'generate_summary',
        format: 'markdown',
        output: 'morning-brief.md'
      },
      {
        type: 'notify',
        method: 'console',
        message: 'Your morning brief is ready!'
      }
    ]
  };
  
  await fs.writeFile(
    path.join(automationsPath, 'morning-brief.yaml'),
    yaml.stringify(morningBrief)
  );
  
  // Generate user-type specific automations
  if (config.user.type === 'founder') {
    await generateFounderAutomations(config, automationsPath);
  } else if (config.user.type === 'engineer') {
    await generateEngineerAutomations(config, automationsPath);
  }
}

async function generateFounderAutomations(config, automationsPath) {
  const investorUpdate = {
    name: 'Weekly Investor Update Prep',
    schedule: 'Weekly Friday 4:00 PM',
    description: 'Prepare weekly investor update with key metrics and highlights',
    actions: [
      {
        type: 'collect_metrics',
        sources: ['revenue', 'user_growth', 'team_updates']
      },
      {
        type: 'generate_report',
        template: 'investor_update',
        output: 'weekly-investor-update.md'
      }
    ]
  };
  
  await fs.writeFile(
    path.join(automationsPath, 'investor-update.yaml'),
    yaml.stringify(investorUpdate)
  );
}

async function generateEngineerAutomations(config, automationsPath) {
  const codeReview = {
    name: 'Automated Code Review Assistant',
    schedule: 'On PR creation',
    description: 'Assist with code reviews and quality checks',
    actions: [
      {
        type: 'analyze_code',
        checks: ['security', 'performance', 'style', 'tests']
      },
      {
        type: 'generate_feedback',
        format: 'github_comment',
        output: 'pr-review-comments.md'
      }
    ]
  };
  
  await fs.writeFile(
    path.join(automationsPath, 'code-review.yaml'),
    yaml.stringify(codeReview)
  );
}

async function generateDocumentation(config, workspacePath) {
  const readme = `# ${config.workspace.name}

Your AI Employee workspace, configured for ${config.user.type} workflows.

## 🎯 Setup Summary

- **User Type:** ${config.user.type}
- **Created:** ${new Date(config.created).toLocaleDateString()}
- **Skills Installed:** ${config.workspace.skills.join(', ')}
- **Integrations:** ${Object.keys(config.integrations).join(', ')}

## 🚀 Getting Started

1. **Start Clawdbot:** \`clawdbot gateway start\`
2. **Check your morning brief:** \`cat morning-brief.md\`
3. **View automations:** \`ls automations/\`
4. **Customize workflows:** Edit files in \`workflows/\`

## 📋 Automations

${Object.entries(config.template.automations).map(([name, automation]) => 
  `### ${name}\n- **Schedule:** ${automation.schedule}\n- **Includes:** ${automation.includes?.join(', ') || 'Custom workflow'}\n`
).join('\n')}

## 🔧 Configuration

All configuration files are in the \`config/\` directory. Main configuration is in \`config/clawdbot.yaml\`.

## 📊 Goals Tracking

Your selected goals:
${config.user.goals?.map(goal => `- ${goal}`).join('\n') || '- General automation'}

## 📞 Support

- Documentation: [docs/](./docs/)
- Logs: [logs/](./logs/)
- Community: [Discord](https://discord.gg/clawdbot)

---

*Generated by Clawdbot Onboarding Wizard v1.0*
`;
  
  await fs.writeFile(path.join(workspacePath, 'README.md'), readme);
}

async function generateMorningBrief(config, workspacePath) {
  const today = new Date().toLocaleDateString();
  
  const morningBrief = `# Morning Brief - ${today}

*Your AI employee has prepared this briefing*

## 🎯 Today's Priorities

${config.user.goals?.map(goal => `- Work on: ${goal}`).join('\n') || '- General productivity tasks'}

## 📅 Schedule Overview

*Calendar integration will populate this section*

## 📊 Key Metrics

${config.user.type === 'founder' ? `
- Revenue tracking: *Setup pending*
- User growth: *Setup pending*
- Team updates: *Setup pending*
` : config.user.type === 'engineer' ? `
- PR reviews pending: *Setup pending*
- GitHub notifications: *Setup pending*
- CI/CD status: *Setup pending*
` : `
- Daily goals: *Setup pending*
- Important updates: *Setup pending*
`}

## 🔔 Notifications

- ✅ AI employee workspace configured
- ⏳ Integrations pending: ${Object.keys(config.integrations).join(', ')}
- 📋 Automations ready: ${Object.keys(config.template.automations).length} workflows

## 💡 Suggestions

1. Review and customize your automations in \`automations/\`
2. Set up integrations for: ${Object.keys(config.integrations).join(', ')}
3. Check back tomorrow for your first real brief!

---

*This briefing will improve as your integrations are configured*
`;

  await fs.writeFile(path.join(workspacePath, 'morning-brief.md'), morningBrief);
}

module.exports = { generateSetup };