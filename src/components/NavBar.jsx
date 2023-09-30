import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
    <ul className="flex gap-2">
      <li>
        <Link href="/" className="text-orange-800 hover:underline font-orbitron font-bold" >Indie Gamer</Link>
      </li>
      <li className="ml-auto">
        <Link href="/about" prefetch={false} className="text-orange-800 hover:underline">
          About
        </Link>
      </li>
      <li>
        <Link className="text-orange-800 hover:underline" href="/reviews">Reviews</Link>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;
