import React, { useState } from 'react'
import matter from 'gray-matter'

import Layout from '../components/Layout'
import Tip from '../components/Tip'

function Homepage({ allTips }) {
  const random = () => allTips[Math.floor(Math.random() * allTips.length)]
  const randomizeTip = () => setTip(random())
  const [tip, setTip] = useState(random())

  const requiredProps = { ...tip, randomizeTip, theme: '' }

  return (
    <Layout>
      <Tip {...requiredProps} />
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
