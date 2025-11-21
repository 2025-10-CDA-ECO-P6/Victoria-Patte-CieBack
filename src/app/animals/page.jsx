import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CardAnimal from "@/components/cardAnimal/CardAnimal";
import data from "../../data/data.json";
import { formatDate } from "@/helpers/formatDate";


export default function Animals() {
const animals = data.animals;
  
const allVisits = animals.flatMap(animal => 
  animal.visits.map(visit => ({
    ...visit,
    animalName: animal.name,
    animalPicture : animal.picture, 
    animalId: animal.id
  }))
);

const upcomingVisits = allVisits.filter(visit => new Date(visit.date) >= new Date());
const nextVisit = upcomingVisits[0];

 return (
    <main>
      <h1>Hello Human!</h1>

      {nextVisit ? (
        <section className={styles.sectionNextVisit}>
          <div>
            <p>
              Prochaine consultation le <strong>{formatDate(nextVisit.date)}</strong> pour{" "}
              <strong>{nextVisit.animalName}</strong>
            </p>
            <Link href="/">Voir la consultation</Link>
          </div>
          <Image
            src={nextVisit.animalPicture}
            alt={`Photo de l'animal ${nextVisit.animalName}`}
            width={132}
            height={132}
          />
        </section>
      ) : (
        <section className={styles.sectionNoNextVisit}>
          <div>
            <p>Aucune consultation à l’horizon, planifiez-en une !</p>
            <Link href="/">Planifier une consultation</Link>
          </div>
        </section>
      )}

      <section>
        {animals.map((animal) => (
          <CardAnimal animal={animal} key={animal.id} />
        ))}
      </section>
    </main>
  );
}