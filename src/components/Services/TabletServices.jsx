import Image from 'next/image'
import React from 'react'
import s from "./Services.module.scss";

function TabletServices() {
  return (
    <div  className={s.tabServicesMainBox}>
      <div className={s.servImgfr}> <Image src="/services-tab-1.png" width={156} height={570} alt="img"/></div>
      <div className={`${s.servicesPref}`}>
        <div className={s.servicesPrefText}>
          <h3 className={s.servicesPrefTitle}>Широкий спектр послуг</h3>
          <p className={s.servicesPrefDescr}>Для шанувальників мотоциклів ми надаємо прокат сучасних моделей.</p>
          <p className={s.servicesPrefDescr}>Якщо вам до душі квадроцикли, ви можете орендувати сучасні та надійні квадроцикли для незабутніх пригод</p>
          <p className={s.servicesPrefDescr}>Для тих, хто шукає екстремальних вражень на багі, ми пропонуємо прокат комфортних та надійних багі для активного відпочинку</p>
          <button type="button" className={s.servicesPrefBtn}>
          <span className={s.servicesPrefBtnIconBox}>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.1714 3.91431L5.37143 16.7143" stroke="#19191C" strokeWidth="1.37143" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.1714 13.304V3.91431H8.78172" stroke="#19191C" strokeWidth="1.37143" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </span>
          </button>
        </div>
      </div>
      <div className={s.servImgsec}> <Image src="/services-tab-2.png" width={155} height={551} alt="img"/></div>
     </div>
  )
}

export default TabletServices
