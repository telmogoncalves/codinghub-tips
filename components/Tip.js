import React, { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Check } from 'react-feather'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Tip({
  document: {
    content,
    data: { title, language }
  },
  randomizeTip,
  darkMode
}) {
  const [copied, setCopied] = useState(false)
  const copiedDelay = () => {
    setCopied(true)

    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="tip-content">
      <h3>
        <span className="language-tag">
          {language}
        </span>
        {title}
      </h3>

      <div className="copy-to-clipboard">
        <CopyToClipboard
          text={content}
          onCopy={() => copiedDelay()}
        >
          {copied ? <Check color="#84ffb5" /> : <Copy />}
        </CopyToClipboard>
      </div>

      <SyntaxHighlighter language={language} style={darkMode ? anOldHope : github}>
        {content}
      </SyntaxHighlighter>

      <button onClick={() => randomizeTip()}>
        Get another
      </button>
    </div>
  )
}
