import React from 'react'
import './howIsMarginCal.scss'
const HowIsMarginCal = () => {
  return (
    <div className='howIsMarginCal'>
        <h3>How is Forex Required Margin calculated? Do I have enough funds to open a position?</h3>
        <p>Initial/required Margin refers to the amount you are required to have at the time of opening a position. “Initial margin %” is determined by the Company in its sole discretion in respect of each underlying Financial Instrument.
            <br/>
            <br/>
            The required margin is derived from the formula: Used Margin + (amount*spread)</p>
    </div>
  )
}

export default HowIsMarginCal