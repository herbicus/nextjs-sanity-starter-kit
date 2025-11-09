import React from "react";
import Link from "next/link";
import clsx from "clsx";

import { PortableText } from "@portabletext/react";
import SanityImage from "@/components/Blocks/SanityImage";

import type { PortableTextReactComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

// Define custom serialized components for different block types
const customComponents: Partial<PortableTextReactComponents> = {
  // Define how different marks are rendered
  marks: {
    link: ({ value, children }) => {
      const { href } = value || {};
      const isExternal = href?.startsWith("http");

      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 text-gray-700 italic">
        {children}
      </blockquote>
    ),
  },

  // Handle custom block types (if needed)
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="relative block aspect-square w-full overflow-hidden">
          <SanityImage
            image={value}
            alt={value.alt || ""}
            fill
            className="mx-auto object-contain"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextContent({
  content,
  className,
}: {
  content: TypedObject[] | TypedObject;
  className?: string;
}) {
  return (
    <div className={clsx("prose prose-base max-w-full", className)}>
      <PortableText value={content} components={customComponents} />
    </div>
  );
}
