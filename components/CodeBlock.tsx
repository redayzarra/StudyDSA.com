import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneDarkReasonable,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  atomDark,
  oneDark,
  oneLight,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const customStyle = {
  lineHeight: "2",
  fontSize: "0.5rem",
  borderRadius: "0px",
  backgroundColor: "transparent",
  padding: "20px",
};

const lineProps = (lineNumber: number) => {
  let style = { display: "block", backgroundColor: "transparent" };
  if (lineNumber === 2) {
    style.backgroundColor = "#262626";
  }
  return { style };
};

const CodeBlock = ({ code }: { code: string }) => {
  return (
    <div className="max-w-2xl min-w-[25rem] rounded-lg overflow-hidden">
      <div className="bg-black/40 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          lineNumberStyle={{ color: "#767676" }}
          language="python"
          style={vscDarkPlus}
          customStyle={customStyle}
          wrapLongLines
          showLineNumbers
          lineProps={lineProps}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
