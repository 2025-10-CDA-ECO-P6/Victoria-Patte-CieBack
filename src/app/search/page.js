import Image from "next/image";

export default function Search() {
  return (
    <main>
      <h1>Hello Human!</h1>
      <header>
        <Image
          src="/kittenHeader.jpg"
          alt="chaton tigré"
          width={200}
          height={200}
        />
      </header>
    </main>
  );
}
