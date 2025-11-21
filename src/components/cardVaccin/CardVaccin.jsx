import Image from "next/image";
import styles from "./CardVaccin.module.css";
import { formatDate } from "@/helpers/formatDate";

export default function CardVaccin({ vaccin }) {
    return (
          <li 
            key={vaccin.id} 
            className={styles.cardVaccin}          
          >
            <Image 
              src="/vaccin.jpg" 
              alt="un virus qui se fait vacciner" 
              width={100} 
              height={100}
              className={styles.vetImage} 
            />
            <div className={styles.vaccinInfo}>
            <h2>{vaccin.name}</h2>
            <div className={styles.vaccinDate}>
            <img src="/icons/calandar-p.svg" alt="icone calandrier" />
            <p>{formatDate(vaccin.administration_date)}</p> 
            </div> 
            </div> 
          </li>
  );
}
