// src/App.js
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

const defaultMarkdown = `
# Heading H1

## Sub-heading H2

[FreeCodeCamp](https://www.freecodecamp.org)

\`inline code\`

\`\`\`
block of code
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    marked.setOptions({
      breaks: true,
    });
  }, []);

  return (
    <div className="App">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
