"use client";

import Link from "next/link";
import { createDataAttribute } from "next-sanity";
import { POST_QUERYResult } from "../../../sanity.types";
import { client } from "@/sanity/lib/client";
import { useOptimistic } from "next-sanity/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Card from "@/components/Blocks/Card";

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};

export function RelatedPosts({
  relatedPosts,
  documentId,
  documentType,
}: {
  relatedPosts: NonNullable<POST_QUERYResult>["relatedPosts"];
  documentId: string;
  documentType: string;
}) {
  const posts = useOptimistic<
    NonNullable<POST_QUERYResult>["relatedPosts"] | undefined,
    NonNullable<POST_QUERYResult>
  >(relatedPosts, (state, action) => {
    if (action.id === documentId && action?.document?.relatedPosts) {
      // Optimistic document only has _ref values, not resolved references
      return action.document.relatedPosts.map(
        (post) => state?.find((p) => p._key === post._key) ?? post
      );
    }
    return state;
  });
  if (!posts) {
    return null;
  }
  return (
    <>
      <h4 className="mb-2">Related Posts</h4>

      <div className="not-prose text-balance">
        <ul
          className="flex flex-col gap-0.5 sm:flex-row"
          data-sanity={createDataAttribute({
            ...createDataAttributeConfig,
            id: documentId,
            type: documentType,
            path: "relatedPosts",
          }).toString()}
        >
          {posts.map((post) => (
            <li
              key={post._key}
              className="shrink-0"
              data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: `relatedPosts[_key=="${post._key}"]`,
              }).toString()}
            >
              <Card elevation="sm" className="group" noPadding>
                <Link
                  href={`/posts/${post?.slug?.current}`}
                  className="inline-flex items-center justify-between gap-x-2 p-4 text-sm"
                >
                  {post.title}

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="size-4 text-current transition-colors group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
