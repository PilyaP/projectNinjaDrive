import MobileServices from "./MobileServices";
import s from "./Services.module.scss";
import Image from "next/image";

export default function Services() {
  return (
    <section className={s.services} id="services">
      <div className="container">
        <div className={s.servicesTopText}>
          <h2 className={s.servicesTitle}>Послуги</h2>
          <ul className={s.servicesFacilitiesList}>
            <li className={s.servicesFacilitiesItem}>
              <p className={s.servicesFacilitiesText}>Квадро</p>
            </li>
            <li className={s.servicesFacilitiesItem}>
              <p className={s.servicesFacilitiesText}>Багі</p>
            </li>
            <li className={s.servicesFacilitiesItem}>
              <p className={s.servicesFacilitiesText}>Мотоцикл</p>
            </li>
          </ul>
        </div>
        <div className={s.mobile}><MobileServices/></div>
        {/* <div className={s.mainDeskImgBlock}>
          <div className={s.servicesImgList}>
            <div className={`${s.servicesImgItem} ${s['servicesImgItem--f']}`}>
             <div className={s.mobImg}> <Image src="/sevices-mob-1.jpg" width={163} height={570} alt="" className={`${s.servicesImg} ${s.servicesImgListPic}`} /></div>
            </div>
            
           <div className={s.deskImgBx}>
               <div className={`${s.deskImg} ${s['deskImg--fr']} ${s.servicesImgItem}`}><Image src="/services-desk-1.png" width={193} height={570} alt="" className={` ${s.servicesImgListPic}`} /></div>
              <div className={`${s.servicesImgItem} ${s['servicesImgItem--s']}`}>
               <div className={s.mobImg}> <Image src="/sevices-mob-2.jpg" width={163} height={378} alt=""  /></div>
               <div className={`${s.tabImg}  ${s['tabImg--sec']}` }> <Image className={s.imgTabSc} src="/sevices-tab-2.jpg" width={163} height={378} alt=""  /></div>
              </div>
           </div>
             
          </div>
          <div className={`${s.servicesPref} ${s['servicesPref--tab']}`}>
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
          
        </div>
           <div className={s.mainDeskImgBlock}>
                <div className={`${s.deskImg} ${s['deskImg--fr']}`}><Image src="/sevices-desk-2.jpg" width={163} height={570} alt="" className={`${s.servicesImg} ${s['servicesImg--th']} ${s.servicesImgListPic}`} /></div>
              <div className={`${s.deskImg} ${s.servicesImgItem}`}><Image src="/servicesdesk4.png" width={302} height={434} alt="" className={` ${s.servicesImgListPic}`} /></div>
           </div>
        <div className={`${s.servicesPref} ${s['servicesPref--mob']}`}>
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
        <div className={`${s.servicesImgList} ${s['servicesImgList--sec']}`}>
          <div className={s.servicesImgItem}>
            <Image src="/sevices-mob-4.jpg"width={163} height={390} alt="" className={`${s.servicesImg} ${s.servicesImgListPic}`} />
          </div>
          <div className={s.servicesImgItem}>
            <Image src="/sevices-mob-3.jpg" width={163} height={570} alt="" className={`${s.servicesImg} ${s.servicesImgListPic}`} />
          </div>
        </div> */}
      </div>
    </section>
  );
}
