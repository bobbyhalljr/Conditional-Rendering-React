import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'

export default function Home() {
  // Local State (true or false)
  const [darkMode, setDarkMode] = React.useState(false)

  // setting up vars
  const dark = '#333'
  const light = '#f1f1f1'

  // styles

  return (
    <div className={styles.container}>
      <Head>
        <title>Conditional Rendering React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {darkMode === true ? <div>Dark</div> : <div>Light</div>}
      </main>
    </div>
  )
}
