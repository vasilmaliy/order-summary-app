import React from 'react'
import musicIcon from '../../../images/icon-music.svg';
import cl from './PaymentPlan.module.css';

function PaymentPlan() {
  return (
    <div className={cl.orderPlan}>
            <img className={cl.musicIcon} src={musicIcon} alt="music icon" />
            <p className={cl.priceInformation}>
              <span className={cl.planType}>Annual Plan</span>
              $59.99/year
            </p>
            <a className={cl.changeLink} href="#">Change</a>
    </div>
  )
}

export default PaymentPlan
