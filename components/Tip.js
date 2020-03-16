import React, { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Check } from 'react-feather'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Tip({ allTips, darkMode, listView }) {
  const random = () => allTips[Math.floor(Math.random() * allTips.length)]
  const randomizeTip = () => setTip(random())
  const [tip, setTip] = useState(random())
  const [copied, setCopied] = useState(false)
  const copiedDelay = () => {
    setCopied(true)

    setTimeout(() => setCopied(false), 3000)
  }
  const TipContent = ({
    tip: {
      document: {
        content,
        data: { title, language }
      }
    }
  }) => (
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

      {!listView && (
        <button onClick={() => randomizeTip()}>
          Get another
        </button>
      )}
    </div>
  )

  return (
    listView ? (
      allTips.map(tip => <TipContent tip={tip} key={tip.document.title} />)
    ) : (
      <TipContent tip={tip} />
    )
  )
}
