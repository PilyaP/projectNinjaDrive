import Image from 'next/image'
import React from 'react'
import s from './SocialsList.module.scss'

function SocialsList() {
  return (
     <ul className={s.socialsList}>
          <li>
          <a href='https://www.facebook.com/profile.php?id=61559328162876&mibextid=LQQJ4d' target='blank'>
              <Image
              className={s.socialsListIcon}
                src="/facebook-dask.png"
                alt="Facebook"
                width={24}
                height={24}
              />
          </a>
          </li>
          <li>
          <a href='https://www.instagram.com/ninja.drive?igsh=eWRvaWVjNWF1ZDJz&utm_source=qr' target='blank'>
              <Image
              className={s.socialsListIcon}
                src="/insta-desk.png"
                alt="Instagram"
                width={24}
                height={24}
              />
          </a>
          </li>
          <li>
           <a href='https://wa.me/380934800007' target='blank'>
              <Image
              className={s.socialsListIcon}
                src="/whats-desk.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
           </a>
          </li>
          <li>
          <a href='https://www.tiktok.com/@ninjadriveclub?_t=8mo4RBv4GSk&_r=1' target='blank'>
              <Image
              className={s.socialsListIcon}
              src="/tiktok-desk.png" alt="TikTok"
              width={24}
                height={24} />
          </a>
          </li>
        </ul>
  )
}

export default SocialsList
