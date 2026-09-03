export type CodeLanguage =
  | "python"
  | "cpp"
  | "typescript"
  | "javascript"
  | "rust";

export type CodeFile = {
  id: string;
  name: string;
  path: string;
  language: CodeLanguage;
  content: string;
  modified: boolean;
};

export type CodeProject = {
  files: CodeFile[];
  activeFileId: string;
};

export type CodeSuggestionType =
  | "generate"
  | "explain"
  | "fix"
  | "optimize";

export type CodeSuggestion = {
  id: string;
  title: string;
  description: string;
  type: CodeSuggestionType;
};