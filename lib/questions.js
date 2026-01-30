function getQuestions(preselectedTemplate) {
  const questions = [];

  // User type selection (skip if pre-selected)
  if (!preselectedTemplate) {
    questions.push({
      type: 'list',
      name: 'userType',
      message: '🎯 What best describes you?',
      choices: [
        {
          name: '👨‍💼 Startup Founder / Entrepreneur',
          value: 'founder',
          short: 'Founder'
        },
        {
          name: '👨‍💻 Software Engineer / Developer',
          value: 'engineer', 
          short: 'Engineer'
        },
        {
          name: '🎨 Content Creator / Influencer',
          value: 'creator',
          short: 'Creator'
        },
        {
          name: '📚 Student / Researcher',
          value: 'student',
          short: 'Student'
        }
      ]
    });
  }

  // Goals selection
  questions.push({
    type: 'checkbox',
    name: 'goals',
    message: '🎯 What are your primary goals with AI assistance?',
    choices: function(answers) {
      const userType = preselectedTemplate || answers.userType;
      
      switch (userType) {
        case 'founder':
          return [
            { name: 'Automate business metrics tracking', value: 'metrics', checked: true },
            { name: 'Generate investor updates', value: 'investors' },
            { name: 'Monitor team productivity', value: 'team' },
            { name: 'Track competitor intelligence', value: 'competitors' },
            { name: 'Optimize decision making', value: 'decisions' }
          ];
        case 'engineer':
          return [
            { name: 'Automate code reviews', value: 'code_reviews', checked: true },
            { name: 'Track OSS contributions', value: 'oss_tracking' },
            { name: 'Monitor technical trends', value: 'tech_trends' },
            { name: 'Optimize development workflow', value: 'dev_workflow' },
            { name: 'Generate technical documentation', value: 'documentation' }
          ];
        case 'creator':
          return [
            { name: 'Schedule content across platforms', value: 'content_scheduling', checked: true },
            { name: 'Track engagement analytics', value: 'analytics' },
            { name: 'Research trending topics', value: 'trend_research' },
            { name: 'Monitor brand mentions', value: 'brand_monitoring' },
            { name: 'Optimize posting times', value: 'timing_optimization' }
          ];
        case 'student':
          return [
            { name: 'Organize research and papers', value: 'research_organization', checked: true },
            { name: 'Track assignment deadlines', value: 'deadline_tracking' },
            { name: 'Optimize study schedule', value: 'study_optimization' },
            { name: 'Monitor career opportunities', value: 'career_tracking' },
            { name: 'Manage citations and references', value: 'citation_management' }
          ];
        default:
          return [
            { name: 'Automate repetitive tasks', value: 'automation', checked: true },
            { name: 'Get better insights from data', value: 'insights' },
            { name: 'Never miss important deadlines', value: 'deadlines' },
            { name: 'Optimize decision making', value: 'decisions' }
          ];
      }
    },
    validate: function(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one goal.';
      }
      return true;
    }
  });

  // Tool integration selection
  questions.push({
    type: 'checkbox',
    name: 'tools',
    message: '🔧 Which tools do you use daily? (Select all that apply)',
    choices: function(answers) {
      const userType = preselectedTemplate || answers.userType;
      
      const baseChoices = [
        { name: '📧 Email (Gmail/Outlook)', value: 'gmail' },
        { name: '📅 Calendar (Google/Outlook)', value: 'calendar' },
      ];
      
      switch (userType) {
        case 'founder':
          return [
            ...baseChoices,
            { name: '💬 Team Chat (Slack/Discord)', value: 'slack', checked: true },
            { name: '📊 Analytics (Google Analytics)', value: 'analytics' },
            { name: '💰 Financial (Stripe/Banking)', value: 'financial' },
            { name: '📋 Project Management (Notion/Trello)', value: 'project_mgmt', checked: true }
          ];
        case 'engineer':
          return [
            ...baseChoices,
            { name: '💻 GitHub', value: 'github', checked: true },
            { name: '💬 Team Chat (Slack/Discord)', value: 'slack' },
            { name: '📋 Project Management (Linear/Jira)', value: 'project_mgmt' },
            { name: '☁️ Cloud Services (AWS/GCP)', value: 'cloud' }
          ];
        case 'creator':
          return [
            ...baseChoices,
            { name: '📱 Social Media (LinkedIn/Twitter/Instagram)', value: 'social', checked: true },
            { name: '📊 Analytics (Google Analytics)', value: 'analytics', checked: true },
            { name: '🎥 Content Tools (Canva/Figma)', value: 'design' },
            { name: '💰 Monetization (YouTube/Patreon)', value: 'monetization' }
          ];
        case 'student':
          return [
            ...baseChoices,
            { name: '📚 Research Tools (Notion/Obsidian)', value: 'research', checked: true },
            { name: '📖 Citation Management (Zotero)', value: 'citations' },
            { name: '💻 Development (GitHub)', value: 'github' },
            { name: '💼 Career (LinkedIn/Job Boards)', value: 'career' }
          ];
        default:
          return baseChoices;
      }
    }
  });

  // Experience level
  questions.push({
    type: 'list',
    name: 'experience',
    message: '🎓 How familiar are you with AI automation?',
    choices: [
      { name: 'Complete beginner - I need all the help I can get', value: 'beginner' },
      { name: 'Some experience - I\'ve tried a few AI tools', value: 'intermediate' },
      { name: 'Advanced user - I want maximum customization', value: 'advanced' }
    ]
  });

  // Final confirmation
  questions.push({
    type: 'confirm',
    name: 'proceed',
    message: '🚀 Ready to create your AI employee?',
    default: true
  });

  return questions;
}

module.exports = { getQuestions };