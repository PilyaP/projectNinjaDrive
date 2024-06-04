"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./GiftCertificate.module.scss";
import Modal from "../Modal/Modal";

export default function GiftCertificate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const openModalWithContent = (title, description) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={s.certificate}>
      <div className="container">
        <div>
          <div className={s.giftCertificate}>
            <div className={s.imageContainer}>
              <Image
                className={s.certificateImg}
                src="/certificate-desk.png"
                alt="Подарунковий сертифікат"
                width={391}
                height={406}
              />
            </div>
            <div className={s.content}>
              <h2 className={s.heading}>ПОДАРУНКОВИЙ СЕРТИФІКАТ</h2>
              <p className={s.subtitle}>
                Найкращий сюрприз для ваших близьких
              </p>
              <p className={s.description}>
                Купуй сертифікат у{" "}
                <span className={s.ninjaDrive}>NINJA DRIVE</span>. Напиши
                нам, щоб дізнатися деталі.
              </p>
              <button
                className={s.button}
                onClick={() =>
                  openModalWithContent(
                    "Дізнатися деталі",
                    "Залиште свій номер телефону, ми вам передзвонимо протягом декількох хвилин та розповімо всі деталі :)"
                  )
                }
              >
                Деталі
              </button>
            </div>
          </div>
          <div className={s.contentMob}>
            <h3 className={s.headingMob}>ПОДАРУНКОВИЙ СЕРТИФІКАТ</h3>
            <p className={s.subtitleMob}>
              Найкращий сюрприз для ваших близьких
            </p>
            <p className={s.descriptionMob}>
              Купуй сертифікат у{" "}
              <span className={s.ninjaDrive}>NINJA DRIVE</span>. Напиши нам, щоб дізнатися деталі.
            </p>
            <button
              className={s.buttonMob}
              onClick={() =>
                openModalWithContent(
                  "Дізнатися деталі",
                  "Залиште свій номер телефону, ми вам передзвонимо протягом декількох хвилин та розповімо всі деталі :)"
                )
              }
            >
              Деталі
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title={modalContent.title}
          description={modalContent.description}
        />
      )}
    </section>
  );
}
