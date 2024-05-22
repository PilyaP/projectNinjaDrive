import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Pricing from "@/components/Pricing/Pricing";
import Advantages from "@/components/Advantages/Advantages";
import GiftCertificate from "@/components/GiftCertificate/GiftCertificate";
import Reviews from "@/components/Reviews/Reviews";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Advantages />
      <GiftCertificate />
      <Reviews />
      <Contacts />
      <Footer />
    </main>
  );
}
