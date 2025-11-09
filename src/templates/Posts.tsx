// src/templates/Posts.tsx

import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Card from "@/components/Blocks/Card";
import SanityImage from "@/components/Blocks/SanityImage";

import type { SanityAssetDocument } from "next-sanity";
import type { POSTS_QUERYResult } from "../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="grid grid-cols-1 gap-6">
      {posts.map((post) => (
        <li key={post._id}>
          <Card elevation="md" className="group" noPadding>
            <Link
              className="flex flex-wrap items-center justify-between gap-x-4 pr-6 text-lg font-medium transition-colors group-hover:bg-gray-50 lg:text-2xl"
              href={`/posts/${post?.slug?.current}`}
              aria-label={post?.title || "Link to Post"}
            >
              <div className="flex h-full w-full items-center gap-4">
                <div className="relative aspect-square w-24 flex-shrink-0 overflow-hidden">
                  <SanityImage
                    image={post?.mainImage as SanityAssetDocument}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex w-full items-center justify-between gap-4">
                  <span className="inline-block py-4">{post?.title}</span>

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="size-4 text-current transition-colors group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}
