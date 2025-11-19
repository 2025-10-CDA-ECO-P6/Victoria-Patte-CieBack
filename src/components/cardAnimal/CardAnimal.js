import Image from "next/image";

export default function CardAnimal({ animal }) {
  return (
    <article>
      <Image 
        src={animal.picture} 
        alt={animal.name} 
        width={150} 
        height={150} 
      />
      <h3>{animal.name}</h3>
      <p>{animal.species} - {animal.breed}</p>
      <p>{animal.date_of_birth}</p>
    </article>
  );
}
