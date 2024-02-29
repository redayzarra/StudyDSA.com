import { FaCircle } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";
import { CSSProperties } from "react";

interface Props {
  title?: string;
  code: string;
  language?: string;
  showLines?: boolean;
  highlightLines?: number[];
}

const customStyle = {
  lineHeight: "2",
  fontSize: "0.7rem",
  borderRadius: "0px",
  backgroundColor: "transparent",
  padding: "20px",
};

const CodeBlock = ({
  code,
  title,
  language = "python",
  highlightLines = [],
  showLines = false,
}: Props) => {
  // // Line props - determine if lineNumber is in highlightLines
  // const lineProps = (lineNumber: number) => {
  //   let style: CSSProperties = { display: "block" };
  //   if (highlightLines.includes(lineNumber)) {
  //     style.backgroundColor = "#2c313c";
  //   }
  //   return { style };
  // };

  const lineNumberStyle = {
    minWidth: "1.5em",
    paddingRight: "1em",
    fontWeight: "normal",
    textAlign: "left",
    userSelect: "none",
    color: "#888",
  } as CSSProperties;

  return (
    <div className="mt-4 spacing-y-px max-w-3xl mx-auto shadow-md bg-[#23272e] dark: dark:bg-stone-900/[0.3] border-t-2 dark:border-stone-700 rounded-lg overflow-hidden">
      <div className="grid grid-cols-3 items-center px-4 py-1 bg-[#17191d] dark:bg-black/70">
        <div className="flex justify-start items-center space-x-2">
          <FaCircle className="text-[#FF605C]" size={12} />
          <FaCircle className="text-[#FFBD44]" size={12} />
          <FaCircle className="text-[#00CA4E]" size={12} />
        </div>
        <h1 className="text-base font-medium text-white justify-self-center">
          {title}
        </h1>
        <div className="justify-self-end">
          <CopyButton
            code={code}
            className="text-white hover:bg-black/40 hover:text-white"
          />
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={customStyle}
        lineNumberStyle={lineNumberStyle}
        showLineNumbers={showLines}
        // lineProps={lineProps}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
