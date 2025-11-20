import Image from "next/image";
import data from "../../../data/data.json";
import styles from "./page.module.css";
import AnimalTabs from "../../../components/animalTabs/AnimalTabs";

export default async function AnimalDetails({ params }) {
  const { id } = await params;
   const animal = data.animals[id-1];


  if (!animal) {
    return <main><h1>Animal introuvable</h1></main>;
  }

  return (
    <main className={styles.animalDetails}>
      <Image src={animal.picture} alt={`Photo de ${animal.species}`} width={300}  height={300}/>
     <AnimalTabs animal={animal} />
    </main>
  );
}
