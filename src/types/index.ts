export interface WizardOptions {
  role?: string;
  template?: string;
  dryRun?: boolean;
}

export interface MemoryEntry {
  id: string;
  content: string;
  type: 'preference' | 'decision' | 'learning' | 'context';
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface MemorySearchResult {
  memory: MemoryEntry;
  score: number;
}