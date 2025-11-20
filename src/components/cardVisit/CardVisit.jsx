import Image from "next/image";
import styles from "./CardVisit.module.css";
import Link from "next/link";

export default function CardVisit({ visit }) {
  return (
          <li 
            key={visit.id}           
          >
            {visit.date}
            {visit.reason}
            {visit.status}
            {visit.veterinarian.name}
          </li>
  );
}
