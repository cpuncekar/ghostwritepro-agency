export interface CopyFormData {
  description: string;
  copyType: string;
  tone: string;
  platform: string;
  audience: string;
}

export interface GeneratedCopy {
  results: string[];
  metadata: {
    timestamp: string;
    promptTokens: number;
    completionTokens: number;
  };
}