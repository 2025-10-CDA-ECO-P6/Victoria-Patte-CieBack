import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Search() {
  return (
    <main>
      <h1>Hello Human!</h1>
      <section className={styles.sectionNextVaccine}>
        <div> 
        <p>Pepette sera vaccinée demain à 7h00 !</p>
        <Link href="/">Voir les details</Link>
        </div>
         <Image
          src="/kittenHeader.png"
          alt="chaton tigré"
          width={150}
          height={125}
        />
      </section>
    </main>
  );
}
