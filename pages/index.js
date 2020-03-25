import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Search } from 'react-feather'

import Layout from '../components/Layout'
import Tip from '../components/Tip'

function Homepage({ allTips }) {
  const [language, setLanguage] = useState()
  const [search, setSearch] = useState()
  const getLanguages = allTips.map(({ document: { data } }) =>
    data.language
  )
  const uniqueLanguages = [...new Set(getLanguages)].sort()
  const filteredTips = allTips.filter(({ document: { data } }) => {
    if (!language && !search) return allTips

    if (search && !language) {
      return data.title.match(new RegExp(search))
    }

    if (language && !search) {
      return data.language === language
    }

    if (language && search) {
      return data.language === language && data.title.match(new RegExp(search))
    }
  })

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

            <div className="search">
              <input
                type="text"
                placeholder="Search for a tip"
                onChange={e => setSearch(e.target.value)}
              />
              <Search />
            </div>
          </Col>
        </Row>
      </Grid>

      {filteredTips.length ? (
        <Tip allTips={filteredTips.sort(() => { return .5 - Math.random() })} />
      ) : (
        <div className="empty">
          <span className="emoji">
            🤖
          </span>

          <h3>Couldn't find what you're looking for?</h3>
          <h5>
            Why not adding it yourself? {' '}
            <a href="https://github.com/telmogoncalves/codinghub-tips" target="_blank">
              Open GitHub
            </a>
          </h5>
        </div>
      )}
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
