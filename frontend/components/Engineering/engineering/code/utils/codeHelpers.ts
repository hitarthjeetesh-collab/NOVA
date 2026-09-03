import type { CodeLanguage } from "../types/code";

export function getLanguageLabel(language: CodeLanguage) {
  switch (language) {
    case "python":
      return "Python";
    case "cpp":
      return "C++";
    case "typescript":
      return "TypeScript";
    case "javascript":
      return "JavaScript";
    case "rust":
      return "Rust";
    default:
      return language;
  }
}

export function getFileExtension(language: CodeLanguage) {
  switch (language) {
    case "python":
      return "py";
    case "cpp":
      return "cpp";
    case "typescript":
      return "ts";
    case "javascript":
      return "js";
    case "rust":
      return "rs";
    default:
      return "txt";
  }
}