# 🚀 HOW TO RUN THE CLAWDBOT ONBOARDING WIZARD

## 📋 STEP-BY-STEP SETUP GUIDE

### **Prerequisites:**
- Node.js 16+ installed
- Terminal/command line access
- Basic familiarity with npm

### **Method 1: Run Directly (Recommended)**

```bash
# 1. Navigate to the wizard directory
cd /home/ubuntu/clawd/GITHUB-PROJECTS/clawdbot-onboarding-wizard

# 2. Install dependencies (if not done already)
npm install

# 3. Run the wizard
npm start
```

**Alternative commands:**
```bash
# Direct CLI access
node cli/index.js init

# Test mode (no file creation)
node cli/index.js test

# Pre-select template
node cli/index.js init --template founder
```

### **Method 2: Make it Globally Available**

```bash
# 1. In the wizard directory
cd /home/ubuntu/clawd/GITHUB-PROJECTS/clawdbot-onboarding-wizard

# 2. Link globally
npm link

# 3. Now run from anywhere
clawdbot-onboarding-wizard init
# or
clawdbot-wizard init
```

## 🎯 WHAT TO EXPECT

### **Step 1: Welcome Screen**
```
🎯 Welcome to Clawdbot Onboarding Wizard!
Transforming "now what?" into productive AI employee...

🎯 Clawdbot Onboarding Wizard v1.0
Let's get you from confused to productive in 5 minutes!
```

### **Step 2: User Type Selection**
```
? 🎯 What best describes you? (Use arrow keys)
❯ 👨‍💼 Startup Founder / Entrepreneur
  👨‍💻 Software Engineer / Developer
  🎨 Content Creator / Influencer
  📚 Student / Researcher
```

### **Step 3: Goal Selection (Example for Founder)**
```
? 🎯 What are your primary goals with AI assistance? 
(Press <space> to select, <enter> to proceed)
❯◉ Automate business metrics tracking
 ◯ Generate investor updates
 ◯ Monitor team productivity
 ◯ Track competitor intelligence
 ◯ Optimize decision making
```

### **Step 4: Tool Integration**
```
? 🔧 Which tools do you use daily? (Select all that apply)
❯◉ 📧 Email (Gmail/Outlook)
 ◉ 📅 Calendar (Google/Outlook)  
 ◉ 💬 Team Chat (Slack/Discord)
 ◯ 📊 Analytics (Google Analytics)
 ◯ 💰 Financial (Stripe/Banking)
 ◉ 📋 Project Management (Notion/Trello)
```

### **Step 5: Experience Level**
```
? 🎓 How familiar are you with AI automation?
❯ Complete beginner - I need all the help I can get
  Some experience - I've tried a few AI tools
  Advanced user - I want maximum customization
```

### **Step 6: Confirmation**
```
? 🚀 Ready to create your AI employee? (Y/n)
```

### **Step 7: Setup Process**
```
⠋ Checking system requirements...
✅ System requirements met
⠋ Setting up your AI employee workspace...
✅ Workspace created successfully!
⠋ Installing Clawdbot skills...
✅ Installed 5 skills
```

### **Step 8: Success Screen**
```
🎉 Success! Your AI employee is ready to work!

📋 What was set up:
   • Workspace: founder-ai-employee
   • User Type: founder
   • Skills: github, notion, slack, trello, analytics
   • Integrations: email, calendar, slack, project_mgmt

🚀 Next steps:
   1. Start Clawdbot: clawdbot gateway start
   2. Open workspace: cd clawdbot-workspace
   3. Check your morning brief: cat morning-brief.md

💡 Need help? Check the documentation or join our Discord community.
```

## 📁 GENERATED FILES

After successful setup, you'll have:

```
clawdbot-workspace/
├── 📋 README.md                    # Complete setup documentation
├── 📄 morning-brief.md             # Your first AI briefing
├── 📁 config/
│   └── clawdbot.yaml              # Main Clawdbot configuration
├── 📁 automations/
│   ├── morning-brief.yaml         # Daily briefing automation
│   └── investor-update.yaml       # Weekly investor update (founder)
├── 📁 workflows/                  # Custom workflow definitions
├── 📁 integrations/               # Tool integration configs  
├── 📁 docs/                       # Documentation
└── 📁 logs/                       # Activity logs
```

## 🧪 TESTING THE WIZARD

### **Run Test Suite:**
```bash
# In wizard directory
npm test
```

**Expected output:**
```
🧪 Testing Clawdbot Onboarding Wizard v1.0

✅ Founder template test passed
✅ Engineer template test passed  
✅ Workspace validation test passed
✅ Template loading test passed
✅ Configuration generation test passed

🎉 All tests passed! V1 is working correctly.
```

### **Run Demo Mode:**
```bash
# See what gets generated without interactive prompts
node demo/demo-run.js
```

### **Test Mode (No File Creation):**
```bash
# Run wizard without creating actual files
node cli/index.js test
```

## 🛠️ TROUBLESHOOTING

### **Common Issues:**

#### **"Command not found" Error:**
```bash
# Make sure you're in the right directory
pwd
# Should show: /home/ubuntu/clawd/GITHUB-PROJECTS/clawdbot-onboarding-wizard

# Try running directly
node cli/index.js init
```

#### **Dependency Issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

#### **Permission Issues:**
```bash
# Make CLI executable
chmod +x cli/index.js
```

#### **Node Version Issues:**
```bash
# Check Node version (needs 16+)
node --version

# If too old, update Node.js
```

### **Debug Mode:**
```bash
# Run with debug output
DEBUG=* node cli/index.js init
```

## 🎯 CUSTOMIZATION

### **Adding Your Own Template:**
1. Create new directory in `templates/yourtype/`
2. Add `config.yaml` with your template definition
3. Test with: `node cli/index.js init --template yourtype`

### **Modifying Existing Templates:**
Edit files in `templates/founder/config.yaml` or `templates/engineer/config.yaml`

### **Adding New Integrations:**
Modify `cli/wizard.js` function `configureIntegrations()`

## 📦 PUBLISHING TO NPM

When ready to share publicly:

```bash
# 1. Update package.json version
# 2. Login to NPM
npm login

# 3. Publish
npm publish

# 4. Users can then install globally
npm install -g clawdbot-onboarding-wizard
clawdbot-wizard init
```

## 🎉 SUCCESS VALIDATION

**You know it's working when:**
1. ✅ Wizard completes without errors
2. ✅ `clawdbot-workspace/` directory is created
3. ✅ Generated files contain your selected options
4. ✅ Morning brief reflects your user type
5. ✅ README.md shows your specific configuration

**Ready to transform "I downloaded Clawdbot, now what?" into "I have a working AI employee!"** 🚀