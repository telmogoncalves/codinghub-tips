import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Layout from '../components/Layout'
import Tip from '../components/Tip'

function Homepage({ allTips }) {
  const [language, setLanguage] = useState()
  const getLanguages = allTips.map(({ document: { data } }) =>
    data.language
  )
  const uniqueLanguages = [...new Set(getLanguages)].sort()
  const filteredTips = language ? allTips.filter(({ document: { data } }) =>
    data.language === language
  ) : allTips

  return (
    <Layout>
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="categories">
              <button
                className={!language ? 'active' : ''}
                onClick={() => setLanguage()}
              >
                All
              </button>

              {uniqueLanguages.map(lang =>
                <button className={lang === language ? 'active' : ''} key={lang} onClick={() => setLanguage(lang)}>
                  {lang}
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Grid>
      <Tip allTips={filteredTips.sort(() => { return .5 - Math.random() })} />
    </Layout>
  )
}

Homepage.getInitialProps = async(context) => {
  const tips = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return { document, slug }
    })

    return data
  })(require.context('../tips', true, /\.md$/))

  return {
    allTips: tips,
  }
}

export default Homepage
