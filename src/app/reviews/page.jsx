import Heading from "@/components/Heading";
import Link from "next/link";
import { getReviews } from "../../../lib/reviews";


export const metadata = {
  title: "Reviews",
};


export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>

      <nav>
        <ul className="flex flex-row flex-wrap gap-3 ">
          {reviews.map((item) => {
            return (
              <li key={item.slug} className="border w-80 bg-orange-200 rounded-t hover:shadow-xl">
                <Link href={`/reviews/${item.slug}`}>
                  <img
                    src={item.image}
                    width="320"
                    height="180"
                    alt=""
                    className=" rounded"
                  />
                  <h2 className="text-center font-semibold py-2 font-orbitron">
                    {item.title}
                  </h2>
                </Link>
              </li>
            );
          })}
          
        </ul>
      </nav>
    </>
  );
}
