import Image from "next/image";
import styles from "./CardVisit.module.css";
import Link from "next/link";

export default function CardVisit({ visit }) {
  return (
          <li 
            key={visit.id} 
            className={styles.cardVisit}          
          >
            <Image 
              src="/vet.jpg" 
              alt="photo vétérinaire avec un chiot" 
              width={200} 
              height={200}
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
