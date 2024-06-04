'use client';
import { useState } from "react";
import SocialsList from "../common/SocialsList/SocialsList";
import s from "./Hero.module.scss";
import Image from "next/image";
import Modal from "../Modal/Modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setmodalContent] = useState({title: '', description: ''});
  
  const toggleModal = ( title = '', description = '') => {
    setmodalContent({title, description})
     setIsModalOpen(!isModalOpen)
  }
  

  return (
     <section className={s.hero}>
      <div className='container'>
        <div className={s.heroText}>
          <div className={s.ninja}>
          </div>
          <div className={s.heroContent}>
            <div className={s.heroContentText}>
              <div className={s.heroReviewsExmp}>
                <Image
                  src="/photos-1k-desk.png"
                  alt="відгуки"
                  width={63}
                  height={24}
                />
                  <p className={s.heroSubtitle}>
                    <span className={s.heroSubtitleNum}>1K+</span>
                  Позитивних відгуків
                  </p>
              </div>
            
              <div className={s.heroTitleGroup}>
                  <h3 className={s.heroUptitle}>Відчуй драйв на повну:</h3>
                  <h1 className={s.heroMaintitle}>Пригоди на квадроциклах</h1>
                  <h3 className={s.heroUptitle}>чекають на тебе!</h3>
              </div>
              <p className={s.herDscr}>Ninja Drive Club: Приєднуйся до нас, щоб відкрити нові горизонти, насолодитися швидкістю і природою в одному заїзді. Твоя пригода починається тут</p>
            </div>
            
            <div className={s.heroButtonsBox}>
              <ul className={s.heroButtonsList}>
               <li> <button onClick={()=> toggleModal( 'Бажаєте записятися на прогулянку?', "Залишіть свій номер телефону, ми вам передзвонимо протягом декількох хвилин та розповімо всі деталі :)")} className={`${s.heroBtn} ${s.signup}`}>Записатися</button></li>
               <li> <button onClick={()=> toggleModal('Бажаєте замовити Сертифікат?', 'Залишіть свій номер телефону, ми вам передзвонимо протягом декількох хвилин та розповімо всі деталі :)')} className={`${s.heroBtn} ${s.certificate}`}>Сертифікат</button></li>
              </ul>
                <p className={s.heroCalltoAction}>купуй в подарунок:)</p>
            </div>
            <div className={s.socialsListBox}>

              <SocialsList/>
           
          </div>
          </div>
          
        </div>
      </div>
    { isModalOpen && <Modal
       onClose={toggleModal}
      title={modalContent.title}
      description={modalContent.description}
      />}
    </section>
  );
}
