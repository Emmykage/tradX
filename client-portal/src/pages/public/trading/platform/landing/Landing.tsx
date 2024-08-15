import React from 'react'
import "./landing.scss"
import { useTranslation } from 'react-i18next'

const Landing = () => {
  const {t, i18n} = useTranslation(["translation", "common"])
  console.log(i18n, "heyyyy")
  return (
    <div className='landingContainer'>
        <div className='navRouting'>
        </div>
        <h1>Trading Platform</h1>
        <p>{t("tradingIntro")}</p>
        {/* <p>Take your trading to the next level with the markets.com powerful, feature & benefit rich platform, featuring high grade charting, unique analytic tools and customisable alerts.</p> */}
     </div>

  )
}

export default Landing