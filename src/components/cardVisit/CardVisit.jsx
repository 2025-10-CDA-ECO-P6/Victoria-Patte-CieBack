import Image from "next/image";
import styles from "./CardVisit.module.css";

export default function CardVisit({ visit }) {
  return (
          <li 
            key={visit.id} 
            className={styles.cardVisit}          
          >
            <Image 
              src="/vet.jpg" 
              alt="photo vétérinaire avec un chiot" 
              width={100} 
              height={100}
              className={styles.vetImage} 
            />
            <div>
            <h2>{visit.veterinarian.name}</h2> 
            <p>{visit.reason}</p> 
            <p>{visit.date}</p> 
            <p>{visit.status}</p>
            </div> 
          </li>
  );
}
