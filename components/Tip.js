import React, { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Check } from 'react-feather'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
        data: { title, language, twitter }
      }
    }
  }) => (
    <div className="tip-content">
      <span className="language-tag">
        {language}
      </span>

      <h3>
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

      <div className="added-by">
        Added by {' '}
        <a href={`https://twitter.com/${twitter}`} target="_blank">
          @{twitter}
        </a>
      </div>

      {!listView && (
        <button onClick={() => randomizeTip()}>
          Get another
        </button>
      )}
    </div>
  )

  return (
    <Grid>
      <Row>
        <Col md={8} mdOffset={2}>
          {listView ? (
            <Row>
              {allTips.sort(() => { return .5 - Math.random() }).map(tip => (
                <Col md={12}>
                  <TipContent tip={tip} key={tip.document.title} />
                </Col>
              ))}
            </Row>
          ) : <TipContent tip={tip} />}
        </Col>
      </Row>
    </Grid>
  )
}
