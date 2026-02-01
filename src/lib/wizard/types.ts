export interface WizardOptions {
  role?: string;
  template?: string;
  dryRun?: boolean;
}

export interface RoleTemplate {
  name: string;
  description: string;
  files: TemplateFile[];
  config: OpenClawConfig;
  dependencies: string[];
  automations: Record<string, Automation>;
  workflows: Workflow[];
  skills: string[] | { entries: Record<string, SkillConfig> };
}

export interface TemplateFile {
  path: string;          // Relative to workspace root
  content: string;       // File content or template
  isTemplate: boolean;   // If true, process with variables
}

export interface OpenClawConfig {
  skills?: {
    entries: Record<string, SkillConfig>;
  };
}

export interface SkillConfig {
  enabled: boolean;
  description?: string;
  config?: Record<string, any>;
}

export interface Automation {
  schedule: string;
  description?: string;
  priority?: string;
  includes?: string[];
}

export interface Workflow {
  name: string;
  trigger: string;
  actions: string[];
}

export interface UserPreferences {
  userType: string;
  goals: string[];
  tools: string[];
  experience: string;
  proceed: boolean;
}

export interface WizardResult {
  success: boolean;
  workspacePath?: string;
  filesCreated?: string[];
  message: string;
}