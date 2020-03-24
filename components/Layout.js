import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Moon, Sun, GitHub } from 'react-feather'

import { FAVICON } from '../constants/AppConstants'

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('DARK_MODE') === 'true')
    setMounted(true)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('DARK_MODE', darkMode)
  }, [darkMode])

  if (!mounted) return <div />

  if (typeof document !== 'undefined') {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  const manipulatedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { darkMode });
  })

  return (
    <div className={`theme--${darkMode ? `dark` : 'light'}`}>
      <Head>
        <link rel="icon" href={FAVICON} />
        <link rel="stylesheet" href="https://use.typekit.net/hxw8tgn.css" />
        <title>CodingHub Tips</title>
      </Head>

      <div className="logo">
        <div className="symbol">⧩</div>
        <div className="label">[ tips ]</div>
      </div>

      <div className="theme-switch" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun /> : <Moon />}
      </div>

      <div>
        {manipulatedChildren}
      </div>

      <footer>
        <a href="https://github.com/telmogoncalves/codinghub-tips" target="_blank">
          <GitHub />
        </a>
        <br />
        Created by <a href="https://twitter.com/telmo" target="_blank">@telmo</a>
      </footer>
    </div>
  )
}

export default Layout
