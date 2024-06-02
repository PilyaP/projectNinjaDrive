import Image from 'next/image'
import React from 'react'
import s from "./Services.module.scss";


function DesktopServices() {
  return (
    <div className={s.deskServicesMainBox}>
              <div className={s.deskServicesImgBox}>
                 <div className={s.servImgfr1}> <Image src="/services-desk-1.png" width={193} height={570} alt="img"/></div>
                 <div className={s.servImgsec1}> <Image src="/services-desk-2.png" width={194} height={378} alt="img"/></div>
              </div>
                <div className={`${s.servicesPref}`}>
                    <div className={s.servicesPrefText}>
                        <h3 className={s.servicesPrefTitle}>Широкий спектр послуг</h3>
                        <p className={s.servicesPrefDescr}>Для шанувальників мотоциклів ми надаємо прокат сучасних моделей.</p>
                        <p className={s.servicesPrefDescr}>Якщо вам до душі квадроцикли, ви можете орендувати сучасні та надійні квадроцикли для незабутніх пригод</p>
                        <p className={s.servicesPrefDescr}>Для тих, хто шукає екстремальних вражень на багі, ми пропонуємо прокат комфортних та надійних багі для активного відпочинку</p>
                        <a title='Перейти в інстаграм'  href="https://www.instagram.com/ninja.drive?igsh=eWRvaWVjNWF1ZDJz&utm_source=qr" target="_blank" className={s.servicesPrefBtn}>
                        <span className={s.servicesPrefBtnIconBox}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1714 3.91431L5.37143 16.7143" stroke="#19191C" strokeWidth="1.37143" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.1714 13.304V3.91431H8.78172" stroke="#19191C" strokeWidth="1.37143" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </span>
                        </a>
                    </div>
                </div>
                <div className={s.deskServicesImgBox}>
                 <div className={s.servImgsec1}> <Image src="/services-desk-3.png" width={193} height={570} alt="img"/></div>
                  <div className={s.servImgfr1}><Image src="/services-desk-4.png" width={302} height={434} alt="img"/></div>
              </div>
          </div>
  )
}

export default DesktopServices
