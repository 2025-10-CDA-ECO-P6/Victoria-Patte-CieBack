import Image from "next/image";
import data from "../../../data/data.json";

export default async function AnimalDetails({ params }) {
  const { id } = await params;
   const animal = data.animals[id-1];
console.log("params.id =", id);
console.log("animal =", animal);

  if (!animal) {
    return <main><h1>Animal introuvable</h1></main>;
  }

  return (
    <main>
      <Image src={animal.picture} width={300}  height={300}/>

      <h1>Details!</h1>
     
    </main>
  );
}
