import Heading from "@/components/Heading";
import Link from "next/link";
import { getReviews } from "../../lib/reviews";

export default async function Home() {
  const res = await getReviews()
  const featured = res[0]
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best Indie games reviewed for you</p>
      <div className="border bg-orange-200 w-80 rounded-t hover:shadow-xl sm:w-full">
                <Link href={`/reviews/${featured.slug}`} className="flex items-center flex-col sm:flex-row">
                <img src={featured.image} width="320" height="180" alt="" className=" rounded sm:rounded-l sm:rounded-r-none" />
                <h2 className="text-center py-2 font-orbitron font-semibold sm:pl-2">{featured.title}
                </h2></Link>
            </div>
    </>
  );
}
