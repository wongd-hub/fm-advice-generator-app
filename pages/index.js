
import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'

import iconDice from '../public/static/images/icon-dice.svg'
import flag from '../public/static/images/Flag_of_Ukraine.svg'

const loadingVariants = {
  loading: { opacity: 0, y: 20 },
  notLoading: { opacity: 1, y: 0 }
}
const visibleVariants = {
  closed: {opacity: 0, x: 200 },
  open: { opacity: 1, x: 0 }
}

export default function Home() {
  const [advice, setAdvice] = useState({
    adviceId: undefined,
    adviceText: undefined
  })
  const [loading, setLoading] = useState(true)
  const [flagVisible, setFlagVisible] = useState(false)

  async function fetcher() {
    let adviceSlip = await fetch('https://api.adviceslip.com/advice')
    let advice = await adviceSlip.json()
    setAdvice({
      adviceId: advice.slip.id,
      adviceText: advice.slip.advice
    })
  }

  // useLayoutEffect to query advice before card is painted to screen
  useLayoutEffect(() => {
    async function initialFetcher() {
      let adviceSlip = await fetch('https://api.adviceslip.com/advice')
      let advice = await adviceSlip.json()
      setAdvice({
        adviceId: advice.slip.id,
        adviceText: advice.slip.advice
      })
      setLoading(false)
    }
    initialFetcher()
  }, [])


  return (
    <div className='global-container'>
      <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
      <title>Frontend Mentor | Advice generator app</title>
      </Head>

      <main className='page-container'>
        <motion.div 
          className="advice-card"
          variants={loadingVariants}
          animate={loading ? "loading" : "notLoading"}
        >
          <h2 className="advice-card__title">
            Advice #{advice.adviceId}
          </h2>
          <p className="advice-card__advice">
            &ldquo;{advice.adviceText}&rdquo;
          </p>
          <div className="advice-card__deco-element"></div>
          <button 
            className="advice-card__reroll-button"
            onClick={fetcher}
            onMouseEnter={() => setFlagVisible(true)}
          >
            <Image 
              src={iconDice} 
              width={20}
              height={20}
              layout="fixed"
              alt="Image of dice for reroll" 
            />
          </button>
        </motion.div>
        <motion.div
          className="flag"
          variants={visibleVariants}
          animate={flagVisible ? 'open' : 'closed'}
        >
          <a 
            href="https://redcross.org.ua/en/donate/"
            target="_blank"
            rel="noreferrer"
          >
            <Image 
              src={flag}
              width={1200 * 0.1}
              height={800 * 0.1}
              alt=""
            />
          </a>
        </motion.div>
      </main>

      <footer className='footer'>

      </footer>
    </div>
  )
}
