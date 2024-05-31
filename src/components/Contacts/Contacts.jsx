import styles from "./Contacts.module.scss";
import Image from "next/image";

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className="container">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.342634948266!2d34.90724627644639!3d48.5458283712915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe01e579650cb%3A0x691e2f5edfc7b6b6!2z0J_QvtC70YLQsNCy0YHRjNC60LUg0YjQvtGB0LUsIDYxOSwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1suk!2sua!4v1717111414049!5m2!1suk!2sua"
            width={341}
            height={236}
            allowFullScreen=""
            loading="lazy"
            className={styles.map}
          ></iframe>
        </div>
        <div className={styles.info}>
          <div className={styles.contactsMap}>
            <h2 className={styles.contactsHeading}>Контакти</h2>
            <div className={styles.contactTel}>
              <p className={styles.contactFat}>Телефон</p>
              <a className={styles.contactThink} href="tel:+380960020777">
                +38 (096) 00 20 777
              </a>
            </div>
            <div className={styles.contactAdress}>
              <p className={styles.contactFat}>Адреса</p>
              <a
                className={styles.contactThink}
                href="https://www.google.com/maps/place/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B5+%D1%88%D0%BE%D1%81%D0%B5,+619,+%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@48.5458284,34.9072463,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbe01e579650cb:0x691e2f5edfc7b6b6!8m2!3d48.5458284!4d34.9098212?entry=ttu"
              >
                м.Дніпро, Полтавське шосе, 619
              </a>
            </div>
            <p className={styles.contactFat}>Соц. мережі</p>
            <div>
              <ul className={styles.socials}>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559328162876&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/facebook-dask.png"
                      alt="Facebook"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ninja.drive?igsh=eWRvaWVjNWF1ZDJz&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/insta-desk.png"
                      alt="Instagram"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/380934800007"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/whats-desk.png"
                      alt="WhatsApp"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@ninjadriveclub?_t=8mo4RBv4GSk&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/tiktok-desk.png"
                      alt="TikTok"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
