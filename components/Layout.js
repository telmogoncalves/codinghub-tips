import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Moon, Sun, Menu, Repeat } from 'react-feather'

import { FAVICON } from '../constants/AppConstants'

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState()
  const [mounted, setMounted] = useState(false)
  const [listView, setListView] = useState(false)

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
    return React.cloneElement(child, { darkMode, listView });
  })

  return (
    <div className={`theme--${darkMode ? `dark` : 'light'}`}>
      <Head>
        <link rel="icon" href={FAVICON} />
        <link rel="stylesheet" href="https://use.typekit.net/hxw8tgn.css" />
        <title>Wee Tips</title>
      </Head>

      <div className="view-switch" onClick={() => setListView(!listView)}>
        {listView ? (
          <>
            <Repeat size={13} />
            Random
          </>
        ) : (
          <>
            <Menu size={13} />
            List
          </>
        )}
      </div>

      <div className="theme-switch" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun /> : <Moon />}
      </div>

      <div>
        {manipulatedChildren}
      </div>

      <footer>
        Created by <a href="https://twitter.com/telmo" target="_blank">@telmo</a>
      </footer>
    </div>
  )
}

export default Layout
