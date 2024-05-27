import styles from "./Contacts.module.scss";
import Image from "next/image";

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className="container">
        <div className={styles.info}>
          <div className={styles.contactsMap}>
            <h2>Контакти</h2>
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
                  width={30}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="/insta-desk.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="/whats-desk.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                />
              </a>
              <a href="#">
                <Image
                  src="/tiktok-desk.png"
                  alt="TikTok"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
          <div
            style={{ width: "842px", height: "506px", position: "relative" }}
          >
            <Image src="/map-desk.png" alt="Map" width={825} height={526} />
            {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.046393747318!2d30.733462616122197!3d46.48252797912537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63138f4d3a2d1%3A0x2d2c7f06d7c2e1d4!2z0YPQuy4g0J_QtdGA0LXQvdGMLCAyMTMsINCR0LvQsNCy0LDRgdGC0YDQvtC9LCDQkdC10LvQsNGB0YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1621502109036!5m2!1sru!2sua"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
