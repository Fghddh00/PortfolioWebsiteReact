import { useState, useEffect } from 'react';

export function useFileContent(filePath: string): string | null {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFileContent() {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error fetching file content:', error);
      }
    }

    fetchFileContent();
  }, [filePath]);

  return content;
}