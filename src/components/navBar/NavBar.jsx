import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" aria-label="Accueil">
        <Image
          src="/icons/home.svg"
          alt="Icône d'accueil"
          width={32}
          height={32}
        />
      </Link>

      <Link href="/animals" aria-label="Liste des animaux">
        <Image
          src="/icons/dog.svg"
          alt="Icône animaux"
          width={32}
          height={32}
        />
        {/* <svg src= "/icons/dog.svg"/> */}
      </Link>
    </nav>
  );
}
