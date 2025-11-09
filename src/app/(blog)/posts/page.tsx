// src/app/(blog)/posts/page.tsx

import { Posts } from "@/templates/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Read our latest articles and blog posts",
  openGraph: {
    title: "Blog Posts",
    description: "Read our latest articles and blog posts",
    images: ["/images/meta/fallback-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts",
    description: "Read our latest articles and blog posts",
    images: ["/images/meta/fallback-og-image.jpg"],
  },
};

export default async function Page() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <>
      <section className="site-container site-max-w mb-10">
        <h1>Posts</h1>
      </section>

      {/* FPO Min Height Rule */}
      <section className="site-container site-max-w mb-10 min-h-[60vh]">
        <Posts posts={posts} />
      </section>
    </>
  );
}
