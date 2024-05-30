import styles from "./Contacts.module.scss";
import Image from "next/image";

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className="container">
        <div className={styles.info}>
          <div className={styles.contactsMap}>
            <h2 className={styles.contactsHeading}>Контакти</h2>
            <div className={styles.contactTel}>
              <p className={styles.contactFat}>Телефон</p>
              <p className={styles.contactThink}>+38 (096) 00 20 777</p>
            </div>
            <div className={styles.contactAdress}>
              <p className={styles.contactFat}>Адреса</p>
              <p className={styles.contactThink}>
                м.Дніпро, Полтавське шосе, 619
              </p>
            </div>
            <p className={styles.contactFat}>Соц. мережі</p>
            <div className={styles.socials}>
              <a href="#">
                <Image
                  src="/facebook-dask.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/insta-desk.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/whats-desk.png"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/tiktok-desk.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              width={343}
              height={244}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.259935448335!2d34.90982121570999!3d48.54582837925719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe01e579650cb%3A0x691e2f5edfc7b6b6!2sPoltavs&#39;ke%20Shose%2C%20619%2C%20Dnipro%2C%20Dnipropetrovsk%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1628753171317!5m2!1sen!2sus"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
