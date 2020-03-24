import React, { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Check } from 'react-feather'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Grid, Row, Col } from 'react-flexbox-grid'

export default function Tip({ allTips, darkMode }) {
  const [copied, setCopied] = useState(false)
  const copiedDelay = () => {
    setCopied(true)

    setTimeout(() => setCopied(false), 3000)
  }
  const TipContent = ({
    tip: {
      document: {
        content,
        data: { title, language, twitter, createdAt }
      }
    }
  }) => {
    const isNew = () => {
      const tipDate = new Date(createdAt).getTime()
      const twoDaysAgo = new Date().getTime()

      return twoDaysAgo - tipDate < (60 * 60 * 1000 * 24 * 2) // 2 days old
    }

    return (
      <div className="tip-content">
        <h3>
          {title}
        </h3>

        <div className="code-container">
          <div className="language-tag">
            <span>
              {language}
            </span>
          </div>

          <div className="copy-to-clipboard">
            <CopyToClipboard
              text={content}
              onCopy={() => copiedDelay()}
            >
              {copied ? <Check color="#84ffb5" /> : <Copy />}
            </CopyToClipboard>
          </div>

          {isNew() && (
            <div className="new-tip">
              <span>
                NEW
              </span>
            </div>
          )}

          <SyntaxHighlighter language={language} style={darkMode ? anOldHope : github}>
            {content}
          </SyntaxHighlighter>
        </div>

        <div className="added-by">
          Added by {' '}
          <a href={`https://twitter.com/${twitter}`} target="_blank">
            @{twitter}
          </a>
        </div>
      </div>
    )
  }

  return (
    <Grid>
      <Row>
        <Col md={8} mdOffset={2}>
          <Row>
            {allTips.map((tip, index) => (
              <Col md={12} key={index}>
                <TipContent tip={tip} key={tip.document.title} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}
