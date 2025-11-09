// app/(blog)/posts/[slug]/page.tsx

import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { POST_QUERY } from "@/sanity/lib/queries";

import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/templates/Post";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug } as QueryParams,
  });

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found",
    };
  }

  const postTitle = post.title ?? "Site Post";
  const postDescription = post.description ?? "Site Post Description";
  return {
    title: postTitle,
    description: postDescription,
    openGraph: {
      title: postTitle,
      description: postDescription,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description: postDescription,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

// Next.js 16: params is now a Promise
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug } as QueryParams,
  });

  if (!post) {
    return notFound();
  }

  return (
    <article className="site-container site-max-w min-h-[70vh]">
      <Post post={post} />
    </article>
  );
}
