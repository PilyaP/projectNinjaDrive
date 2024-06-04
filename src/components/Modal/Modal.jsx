// import { useEffect, useState } from "react";
// import styles from "./Modal.module.scss";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Modal({ onClose, title, description }) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   // Fermer la modale avec la touche Escape
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     const handleWheel = (event) => {
//       event.preventDefault();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     // Empêcher le défilement de la page
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("wheel", handleWheel);
//       document.body.style.overflow = "auto";
//     };
//   }, [onClose]);

//   // Fermer la modale en cliquant sur l'overlay
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   // Gestionnaire de soumission du formulaire
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const whatsappMessage = `Привіт! Моє ім'я ${name}, мій номер телефону ${phone}. Я хочу дізнатися деталі.`;
//     const whatsappUrl = `https://wa.me/ваш_номер_телефону?text=${encodeURIComponent(
//       whatsappMessage
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <div className={styles.overlay} onClick={handleOverlayClick}>
//       <div className={styles.modal}>
//         <button className={styles.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </button>
//         <h2 className={styles.modalTitle}>{title}</h2>
//         <p className={styles.modalDescription}>{description}</p>
//         <form className={styles.modalForm} onSubmit={handleSubmit}>
//           <label className={styles.modalLabel}>
//             Ваше ім&apos;я:
//             <input
//               className={styles.modalInput}
//               placeholder="Ваше ім'я"
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label className={styles.modalLabel}>
//             Номер телефону:
//             <input
//               className={styles.modalInput}
//               placeholder="+38 (000) 00 00 000"
//               type="phone"
//               name="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </label>
//           <button className={styles.modalButton} type="submit">
//             Залишити
//           </button>
//         </form>
//       </div>
//     </div>
//   );

// }

"use client";
import { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal({ onClose, title, description }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleWheel = (event) => {
      event.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: false });

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const whatsappMessage = `Привіт! Моє ім'я ${name}, мій номер телефону ${phone}. Я хочу дізнатися деталі.`;
    const whatsappUrl = `https://wa.me/380934800007?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon />
        </button>
        <h2 className={styles.modalTitle}>{title}</h2>
        <p className={styles.modalDescription}>{description}</p>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label className={styles.modalLabel}>
            Ваше ім&apos;я:
            <input
              className={styles.modalInput}
              placeholder="Ваше ім'я"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={styles.modalLabel}>
            Номер телефону:
            <input
              className={styles.modalInput}
              placeholder="+38 (000) 00 00 000"
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <button className={styles.modalButton} type="submit">
            Залишити
          </button>
        </form>
      </div>
    </div>
  );
}
// "use client";
// import { useEffect, useState } from "react";
// import styles from "./Modal.module.scss";
// import CloseIcon from "@mui/icons-material/Close";

// export default function Modal({ onClose, title, description }) {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     const handleWheel = (event) => {
//       event.preventDefault();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("wheel", handleWheel);
//       document.body.style.overflow = "auto";
//     };
//   }, [onClose]);

//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, phone }),
//       });

//       if (response.ok) {
//         alert("Email sent successfully");
//         onClose();
//       } else {
//         alert("Failed to send email");
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Error sending email");
//     }
//   };

//   return (
//     <div className={styles.overlay} onClick={handleOverlayClick}>
//       <div className={styles.modal}>
//         <button className={styles.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </button>
//         <h2 className={styles.modalTitle}>{title}</h2>
//         <p className={styles.modalDescription}>{description}</p>
//         <form className={styles.modalForm} onSubmit={handleSubmit}>
//           <label className={styles.modalLabel}>
//             Ваше ім&apos;я:
//             <input
//               className={styles.modalInput}
//               placeholder="Ваше ім'я"
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <label className={styles.modalLabel}>
//             Номер телефону:
//             <input
//               className={styles.modalInput}
//               placeholder="+38 (000) 00 00 000"
//               type="phone"
//               name="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </label>
//           <button className={styles.modalButton} type="submit">
//             Залишити
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
