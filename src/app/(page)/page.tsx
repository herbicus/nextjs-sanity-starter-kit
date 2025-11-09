// src/app/(blog)/page.tsx

import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

import { Demo } from "@/templates/Demo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Website Homepage",
  description: "Read our latest articles and blog posts",
  openGraph: {
    title: "Website Homepage",
    description: "Read our latest articles and blog posts",
    images: ["/images/meta/fallback-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Homepage",
    description: "Read our latest articles and blog posts",
    images: ["/images/meta/fallback-og-image.jpg"],
  },
};

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return <Demo posts={posts} />;
}
