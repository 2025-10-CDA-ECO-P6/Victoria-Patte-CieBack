import Image from "next/image";
import styles from "./CardVaccin.module.css";

export default function CardVaccin({ vaccin }) {
  console.info("vaccins,", vaccin);
    return (
          <li 
            key={vaccin.id} 
            className={styles.cardVaccin}          
          >
            <Image 
              src="/vet.jpg" 
              alt="photo vétérinaire avec un chiot" 
              width={100} 
              height={100}
              className={styles.vetImage} 
            />
            <div>
            <h2>{vaccin.veterinarian}</h2> 
            <p>{vaccin.vaccins[0].name}</p> 
            <p>{vaccin.vaccins[0].administration_date}</p> 
            </div> 
          </li>
  );
}
