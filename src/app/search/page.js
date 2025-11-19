import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CardAnimal from "@/components/cardAnimal/CardAnimal";
import data from "../../data/data.json";


export default function Search() {

    const animals = data.animals;

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
      <section >
       <p>Les animaux : </p>

       {animals.map((animal) => 
        <CardAnimal animal={animal} />
       )}
      </section>
    </main>
  );
}
