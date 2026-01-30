# 🎭 Template Guide

Learn how to create and customize user templates for the Clawdbot Onboarding Wizard.

## Template Structure

Templates are YAML files that define:
- **Configuration settings** for Clawdbot
- **Automation workflows** for specific use cases
- **Skill installations** required for the template
- **Initial setup tasks** to run after configuration

## Built-in Templates

### Founder Template (`examples/templates/founder/`)
Perfect for startup founders and entrepreneurs.

**Key Features:**
- Daily business metrics monitoring
- Investor update automation  
- Competitive intelligence tracking
- Team productivity insights

### Engineer Template (`examples/templates/engineer/`)
Optimized for software developers and technical leads.

**Key Features:**
- Code review automation
- OSS contribution tracking
- GitHub analytics monitoring
- Technical blog scheduling

## Creating Custom Templates

### 1. Template Structure
```
examples/templates/your-template/
├── config.yaml          # Clawdbot configuration
├── workflows/           # Automation workflows
│   ├── morning-brief.yaml
│   └── daily-tasks.yaml
├── skills.json         # Required skills to install
└── README.md           # Template documentation
```

### 2. Configuration File
```yaml
# config.yaml
agent:
  name: "Your Custom Agent"
  persona: "Helpful assistant for your use case"

skills:
  - skill-name
  - another-skill

automations:
  morning_brief:
    schedule: "0 9 * * *"
    action: "generate_brief"
```

### 3. Workflow Files
```yaml
# workflows/morning-brief.yaml
name: "Morning Brief"
description: "Daily summary of key information"
schedule: "0 9 * * *"
actions:
  - name: "check_emails"
    type: "email_scan"
    config:
      priority: "high"
  - name: "weather_update"
    type: "weather_check"
    location: "auto"
```

### 4. Skills Configuration
```json
{
  "required": [
    "email-scanner",
    "weather-tracker"
  ],
  "optional": [
    "calendar-integration",
    "social-media-monitor"
  ]
}
```

## Template Development

### Testing Templates
```bash
# Test a template without applying
npm run test -- --template your-template

# Apply template in dry-run mode
npm start -- --template your-template --dry-run
```

### Template Validation
Templates are automatically validated for:
- Required fields presence
- Skill availability
- Configuration syntax
- Workflow dependencies

## Contributing Templates

1. Create your template in `examples/templates/`
2. Test thoroughly with the test suite
3. Document the template's purpose and features
4. Submit a pull request with example use cases

## Best Practices

- **Clear naming**: Use descriptive, searchable template names
- **Minimal setup**: Ask only essential questions during onboarding
- **Smart defaults**: Provide sensible defaults for common configurations
- **Documentation**: Include clear README for each template
- **Testing**: Ensure templates work on fresh Clawdbot installations

## Template Ideas

**Community requested templates:**
- Sales Professional
- Marketing Manager  
- HR Coordinator
- Finance Analyst
- Freelancer
- Consultant
- Researcher
- Designer

Want to build one? Check out the [Development Guide](DEVELOPMENT.md)!