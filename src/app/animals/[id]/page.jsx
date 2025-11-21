import Image from "next/image";
import data from "../../../data/data.json";
import styles from "./page.module.css";
import AnimalTabs from "../../../components/animalTabs/AnimalTabs";

export default async function AnimalDetails({ params }) {
  const { id } = await params;
  const animal = data.animals[id-1];
  const visits = animal.visits.length > 0 ? animal.visits : ["Aucune consultation"];
  const vaccins = animal.vaccines.length > 0 ? animal.vaccines : ["Aucun vaccin"];


  if (!animal) {
    return <main><h1>Animal introuvable</h1></main>;
  }

  return (
<main className={styles.animalDetails} style={{ position: "relative" }}>
 <h1>Carnet de santé de <strong>{animal.name}</strong></h1>
 
 <section className={styles.animalDetailsContent}>
  <div  className={styles.pictureWrapper}>
    <Image
      src={animal.picture}
      alt={`Photo de ${animal.species}`}
      fill
      loading="eager"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: "16px"
      }}
    />
  </div>

  <AnimalTabs animal={animal} visits={visits} vaccins = {vaccins} />
</section>
</main>
  );
}
