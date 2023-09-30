import Link from "next/link";
import NavBar from "@/components/NavBar";
import "./globals.css";
import { exo2, orbitron } from "./fonts";


// https://nextjs.org/docs/app/api-reference/file-conventions/metadata
export const metadata = {
  title: {default : "Indie Gamer", 
  template : "%s | Indie Gamer"},
  description: "Only the best Indie games reviewed for you",
  keywords : ['Indie games' , "Video games", "Games reviews"],
  // https://developers.google.com/search/docs/crawling-indexing/special-tags
  // openGraph : { // Important when you want to display on chat's or facebook etc... (check it out) 
  //   url :  "https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields"
  // }
};
 


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="px-4 py-2 flex flex-col min-h-screen bg-orange-50">
        <header>
          <NavBar />
        </header>

        <main className="py-3 grow">{children}</main>

        <footer className="text-center text-xs border-t py-3">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RaWG
          </a>
        </footer>
      </body>
    </html>
  );
}
