import SyntaxHighlighter from "react-syntax-highlighter";

import React from "react";

const CodeBlock = ({ codeString }) => {
  return (
    <SyntaxHighlighter language="javascript">{codeString}</SyntaxHighlighter>
  );
};

export default CodeBlock;
