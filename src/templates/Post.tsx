// src/templates/Post.tsx

import React from "react";

import { RelatedPosts } from "@/components/Blocks/RelatedPosts";
import { POST_QUERYResult } from "../../sanity.types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { PortableTextContent } from "@/components/Blocks/PortableTextContent";
import SanityImage from "@/components/Blocks/SanityImage";
import Button from "@/components/Controls/Button";

export function Post({ post }: { post: NonNullable<POST_QUERYResult> }) {
  const { _id, _type, title, mainImage, body, relatedPosts } = post;

  return (
    <section className="site-grid pb-10">
      <div className="col-span-4 lg:col-span-12">
        {title ? <h1>{title}</h1> : null}
      </div>

      <div className="col-span-4 space-y-6">
        {mainImage?.asset?._ref ? (
          <div className="relative aspect-square w-full">
            <SanityImage
              className="mx-auto object-cover"
              image={mainImage}
              fill
              alt={title || ""}
            />
          </div>
        ) : null}

        <Button
          href="/posts"
          className="inline-flex items-center justify-center gap-x-2 whitespace-nowrap"
          size="sm"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="size-4"
            aria-hidden="true"
          />
          Return to Posts
        </Button>
      </div>

      <div
        className={`col-span-4 ${relatedPosts ? "lg:col-span-5" : "lg:col-span-8"} lg:px-4`}
      >
        {body ? <PortableTextContent content={body} /> : null}
      </div>

      {relatedPosts ? (
        <aside className="col-span-4 lg:col-span-2">
          <RelatedPosts
            relatedPosts={relatedPosts}
            documentId={_id}
            documentType={_type}
          />
        </aside>
      ) : null}
    </section>
  );
}
