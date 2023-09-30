import Heading from "@/components/Heading";
import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import {getReview, getSlugs} from "../../../../lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";


export async function generateMetadata({params}) {
  const review = await getReview(params.slug)

  return {
    title : review.title
  }

}

export async function generateStaticParams() { // this will generate all the reviews paths on build. That means we don't have to rerender dynamic path component again 
  const slugs = await getSlugs()

  return slugs.map((slug) => ({slug}))

}


export default async function reviewPage({ params }) {
  const review = await getReview(params.slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <ShareLinkButton/>
      <img src={review.image} width="640" height="360" />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose max-w-screen-sm"
      ></article>
    </>
  );
}
