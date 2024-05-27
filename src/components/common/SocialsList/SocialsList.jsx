import Image from 'next/image'
import React from 'react'
import s from './SocialsList.module.scss'

function SocialsList() {
  return (
     <ul className={s.socialsList}>
          <li>
            <Image
            className={s.socialsListIcon}
              src="/facebook-dask.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </li>
          <li>
            <Image
            className={s.socialsListIcon}
              src="/insta-desk.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </li>
          <li>
            <Image
            className={s.socialsListIcon}
              src="/whats-desk.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </li>
          <li>
            <Image
            className={s.socialsListIcon}
            src="/tiktok-desk.png" alt="TikTok"
            width={24}
              height={24} />
          </li>
        </ul>
  )
}

export default SocialsList
