import Head from 'next/head'
import Image from 'next/image'
var _ = require("lodash") // Use for throttling resize handler

import dividerDesktop from '../public/static/images/pattern-divider-desktop.svg'
import dividerMobile from '../public/static/images/pattern-divider-mobile.svg'
import iconDice from '../public/static/images/icon-dice.svg'

export default function Home() {
  return (
    <div className='global-container'>
      <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
      <title>Frontend Mentor | Advice generator app</title>
      </Head>

      <main className='page-container'>
        <div className="advice-card">
          <h2 className="advice-card__title">
            Advice #
          </h2>
          <p className="advice-card__advice">
            &ldquo;placeholder text&rdquo;
          </p>
          <div className="advice-card__deco-element">
            <Image src={dividerDesktop} alt="" />
          </div>
          <div className="advice-card__reroll-button">
            <Image 
              src={iconDice} 
              alt="Image of dice for reroll" 
              width={22}
              height={22}
            />
          </div>
        </div>

      </main>

      <footer className='footer'>

      </footer>
    </div>
  )
}
