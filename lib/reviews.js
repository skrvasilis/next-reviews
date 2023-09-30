import { readFile } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import { readdir, readdirSync } from "node:fs";

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");

  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { title, date, image, body, slug };
}


export async function getReviews() {
  const files = readdirSync("./content/reviews");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((item) => item.slice(0, -3));
  const reviewsArray = [];
  for (let slug of slugs) {
    const res = await getReview(slug);
    reviewsArray.push(res);
  }
  const sorted = reviewsArray.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  return sorted;
}

export async function getSlugs() {
  const files = readdirSync("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((item) => item.slice(0, -3));
}
