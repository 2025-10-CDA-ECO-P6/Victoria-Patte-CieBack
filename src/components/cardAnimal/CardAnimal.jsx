import Image from "next/image";
import styles from "./CardAnimal.module.css";
import Link from "next/link";

export default function CardAnimal({ animal }) {
  return (
    <Link href={`/animals/${animal.id}`}>

    <article className={styles.cardAnimal}>
      <Image 
        src={animal.picture} 
        alt={animal.name} 
        width={150} 
        height={150}
        className={styles.mainImage} 

      />
      <div>
      <h3>{animal.name}</h3>
      <p>{animal.species} - {animal.breed}</p>
      <div>
      <img src="/icons/calandarIcon.svg" alt="icone calandrier" />
      <p className="date">{animal.date_of_birth}</p>
      </div>
      </div>
    </article>
    </Link>
  );
}
