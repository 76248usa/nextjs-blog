import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import Head from 'next/head'


function App({Component, pageProps}) {
  return (
     <>
     <Head>
      <link rel="icon" href="/favicon.ico"/>
      </Head>     
    <header>
    <Navbar />
    </header>
   <Component {...pageProps} />
    </>
   
  )
}

export default App