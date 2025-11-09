"use client";
// src/templates/Demo.tsx

import React, { useState } from "react";
import Link from "next/link";

import { POSTS_QUERYResult } from "../../sanity.types";

import { useDialog } from "@/context/DialogContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faDollarSign,
  faClock,
  faUserCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Card from "@/components/Blocks/Card";
import SiteInput from "@/components/Forms/SiteInput";
import TextareaInput from "@/components/Forms/TextareaInput";
import SelectInput from "@/components/Forms/SelectInput";
import SwitchInput from "@/components/Forms/SwitchInput";
import CheckboxFieldset from "@/components/Forms/CheckboxFieldset";
import RadioFieldset from "@/components/Forms/RadioFieldset";
import Button from "@/components/Controls/Button";
import ButtonBar from "@/components/Controls/ButtonBar";
import SanityImage from "@/components/Blocks/SanityImage";

import type { SanityAssetDocument } from "next-sanity";

export function Demo({ posts }: { posts: POSTS_QUERYResult }) {
  const { handleOpenDialog, handleCloseDialog } = useDialog();

  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<string>("");

  const handleOpenModalClick = () => {
    handleOpenDialog(
      <div className="space-y-4 rounded-lg bg-white p-6">
        <h4>Hello World</h4>

        <Button theme="secondary" size="sm" onClick={handleCloseDialog}>
          Close Modal
        </Button>
      </div>,
      "portrait"
    );
  };

  return (
    <>
      <section className="site-container site-max-w mb-10">
        <h1 className="mb-2 text-4xl font-bold">Demo Page</h1>
        <p className="text-lg text-gray-600">
          Showcasing components and styling for the project
        </p>
      </section>

      <section className="site-container site-max-w mb-10">
        <h2 className="mb-6 text-2xl font-semibold underline">Box Model</h2>

        <div className="py-6 text-center outline outline-blue-700">
          <span className="block text-lg font-bold lg:hidden">
            Mobile Content
          </span>
          <span className="block lg:hidden">1024px and below</span>
          <span className="block lg:hidden">width: 100%; max-width: 100%;</span>
          <span className="block lg:hidden">Left and Right Padding: 16px</span>

          <span className="hidden text-lg font-bold lg:block">
            Desktop Content
          </span>
          <span className="hidden lg:block">1024px and beyond</span>
          <span className="hidden lg:block">
            width: 100%; max-width: 1440px
          </span>
          <span className="hidden lg:block">Left and Right Padding: 32px</span>
        </div>
      </section>

      <section className="site-container site-max-w mb-10">
        <h2 className="mb-6 text-2xl font-semibold underline">
          Typography Scale
        </h2>
        <div className="space-y-4">
          <h1 className="site-display">Display</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p className="text-base">
            Base paragraph (text-base): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula.
          </p>
          <p className="text-sm">
            Small text (text-sm): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam in dui mauris.
          </p>
          <p className="text-xs">
            Extra small text (text-xs): Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </section>

      <section className="site-container site-max-w mb-10">
        <div className="mb-6 block space-y-2">
          <h2 className="text-2xl font-semibold underline">Grid System</h2>
          <span className="block lg:hidden">Mobile: 4 column grid</span>
          <span className="hidden lg:block">Desktop: 12 column grid</span>
        </div>

        {/* 4 column on mobile, 12 column on desktop */}
        <div className="site-grid">
          {/* 12 items with col-span-1 (12-column layout) */}
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            1
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            2
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            3
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            4
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            5
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            6
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            7
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            8
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            9
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            10
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            11
          </div>
          <div className="col-span-1 rounded bg-blue-600 p-2 text-center text-white">
            12
          </div>

          <div className="col-span-4 rounded bg-blue-100 p-4 text-center lg:col-span-12">
            12 columns (Full width)
          </div>

          {/* Two items with col-span-4 on mobile, col-span-6 on desktop (2-column layout) */}
          <div className="col-span-4 rounded bg-blue-400 p-4 text-center lg:col-span-6">
            6 columns (1/2 width)
          </div>
          <div className="col-span-4 rounded bg-blue-400 p-4 text-center lg:col-span-6">
            6 columns (1/2 width)
          </div>

          {/* Three items with col-span-4 on large screens (3-column layout) */}
          <div className="col-span-4 rounded bg-blue-200 p-4 text-center lg:col-span-4">
            3 columns (1/3 width)
          </div>
          <div className="col-span-4 rounded bg-blue-200 p-4 text-center lg:col-span-4">
            3 columns (1/3 width)
          </div>
          <div className="col-span-4 rounded bg-blue-200 p-4 text-center lg:col-span-4">
            3 columns (1/3 width)
          </div>

          {/* Three items with col-span-4 on mobile, col-span-4 on desktop (4-column layout) */}
          <div className="col-span-4 rounded bg-blue-300 p-4 text-center lg:col-span-3">
            3 columns (1/4 width)
          </div>
          <div className="col-span-4 rounded bg-blue-300 p-4 text-center lg:col-span-3">
            4 columns (1/4 width)
          </div>
          <div className="col-span-4 rounded bg-blue-300 p-4 text-center lg:col-span-3">
            4 columns (1/4 width)
          </div>
          <div className="col-span-4 rounded bg-blue-300 p-4 text-center lg:col-span-3">
            4 columns (1/4 width)
          </div>

          <div className="col-span-4 rounded bg-blue-300 p-2 text-center text-black lg:col-span-3">
            Aside
          </div>
          <div className="col-span-4 rounded bg-blue-400 p-2 text-center text-black lg:col-span-9">
            Main
          </div>

          {/* Offset examples with responsive behavior */}
          <div className="col-span-4 rounded bg-blue-200 p-4 text-center lg:col-span-10 lg:col-start-2">
            10 columns (offset 1 on desktop)
          </div>

          <div className="col-span-4 rounded bg-blue-300 p-4 text-center lg:col-span-8 lg:col-start-3">
            8 columns (offset 2 on desktop)
          </div>

          <div className="col-span-4 rounded bg-blue-400 p-4 text-center lg:col-span-6 lg:col-start-4">
            6 columns (offset 3 on desktop)
          </div>

          <div className="col-span-4 rounded bg-blue-500 p-4 text-center text-white lg:col-span-4 lg:col-start-5">
            4 columns (offset 4 on desktop)
          </div>
        </div>
      </section>

      <section className="site-container site-max-w mb-10">
        <h2 className="mb-6 text-2xl font-semibold underline">
          Button Components
        </h2>

        <h4 className="mb-4 text-xl font-medium">Theme Variations</h4>
        <div className="mb-6 flex gap-4">
          <Button theme="primary">Primary Button</Button>
          <Button theme="secondary">Secondary Button</Button>
          <Button theme="tertiary">Tertiary Button</Button>
        </div>

        <h4 className="mb-4 text-xl font-medium">
          Tone Variations - Primary Theme
        </h4>
        <div className="mb-6 flex gap-4">
          <Button theme="primary" tone="high">
            High Emphasis
          </Button>
          <Button theme="primary" tone="medium">
            Medium Emphasis
          </Button>
          <Button theme="primary" tone="low">
            Low Emphasis
          </Button>
        </div>

        <h4 className="mb-4 text-xl font-medium">
          Tone Variations - Secondary Theme
        </h4>
        <div className="mb-6 flex gap-4">
          <Button theme="secondary" tone="high">
            High Emphasis
          </Button>
          <Button theme="secondary" tone="medium">
            Medium Emphasis
          </Button>
          <Button theme="secondary" tone="low">
            Low Emphasis
          </Button>
        </div>

        <h4 className="mb-4 text-xl font-medium">
          Tone Variations - Tertiary Theme
        </h4>
        <div className="mb-6 flex gap-4">
          <Button theme="tertiary" tone="high">
            High Emphasis
          </Button>
          <Button theme="tertiary" tone="medium">
            Medium Emphasis
          </Button>
          <Button theme="tertiary" tone="low">
            Low Emphasis
          </Button>
        </div>

        <h4 className="mb-4 text-xl font-medium">Size Variations</h4>
        <div className="mb-6 inline-flex flex-col gap-4">
          <Button theme="primary" size="sm">
            Small Button
          </Button>
          <Button theme="primary" size="base">
            Base Button
          </Button>
          <Button theme="primary" size="lg">
            Large Button
          </Button>
        </div>

        <h4 className="mb-4 text-xl font-medium">ButtonBar Examples</h4>
        <div className="mb-6 space-y-6">
          <h4 className="text-lg font-medium">Left Aligned</h4>
          <ButtonBar
            alignment="left"
            buttons={[
              { label: "Save", theme: "primary" },
              { label: "Cancel", theme: "tertiary", tone: "medium" },
              { label: "Delete", theme: "secondary", tone: "medium" },
            ]}
          />

          <h4 className="text-lg font-medium">Center Aligned</h4>
          <ButtonBar
            alignment="center"
            buttons={[
              { label: "Previous", theme: "secondary", tone: "medium" },
              { label: "Continue", theme: "primary" },
              { label: "Skip", theme: "tertiary", tone: "low" },
            ]}
          />

          <h4 className="text-lg font-medium">Right Aligned</h4>
          <ButtonBar
            alignment="right"
            spacing="tight"
            buttons={[
              { label: "Apply", theme: "primary", size: "sm" },
              { label: "Reset", theme: "tertiary", tone: "low", size: "sm" },
            ]}
          />
        </div>

        <h4 className="mb-4 text-xl font-medium">Link Button</h4>
        <div className="mb-6 flex gap-4">
          <Button href="posts">Internal Link</Button>
          <Button href="https://google.com">External Link</Button>
        </div>

        <h4 className="mb-4 text-xl font-medium">Interactive Example</h4>
        <Button onClick={handleOpenModalClick} theme="primary" tone="high">
          Open Modal
        </Button>
      </section>

      <section className="site-container site-max-w mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1 md:col-span-3">
          <h2 className="mb-6 text-2xl font-semibold underline">Inputs</h2>
        </div>
        <SiteInput
          type="text"
          label="Input Label"
          placeholder="Lorem Ipsum..."
        />

        <SiteInput
          type="number"
          label="Icon Input"
          placeholder="Lorem Ipsum..."
          icon={faDollarSign}
        />

        <SiteInput
          type="search"
          label="Search Input"
          placeholder="Lorem Ipsum..."
          icon={faSearch}
        />

        <SiteInput
          type="date"
          label="Date Input"
          placeholder="Lorem Ipsum..."
          icon={faClock}
        />

        <SelectInput label="Select Input">
          <option value="1">Lorem Ipsum</option>
          <option value="2">Lorem Ipsum</option>
          <option value="3">Lorem Ipsum</option>
        </SelectInput>

        <SelectInput label="Icon Select" icon={faUserCircle}>
          <option value="1">Lorem Ipsum</option>
          <option value="2">Lorem Ipsum</option>
          <option value="3">Lorem Ipsum</option>
        </SelectInput>

        <TextareaInput label="Textarea Input" placeholder="Lorem Ipsum..." />

        <div className="flex gap-4">
          <RadioFieldset
            legend="Radio Fieldset"
            options={[
              { id: "1", name: "Option 1" },
              { id: "2", name: "Option 2" },
              { id: "3", name: "Option 3" },
            ]}
            value={radioValue}
            onChange={setRadioValue}
          />

          <CheckboxFieldset
            legend="Checkbox Fieldset"
            options={[
              { id: "1", name: "Lorem Ipsum" },
              { id: "2", name: "Lorem Ipsum" },
              { id: "3", name: "Lorem Ipsum" },
            ]}
            selectedValues={checkboxValues}
            onChange={(value) => {
              setCheckboxValues((prev) =>
                prev.includes(value)
                  ? prev.filter((v) => v !== value)
                  : [...prev, value]
              );
            }}
          />
        </div>

        <SwitchInput
          label="Switch Input"
          checked={switchChecked}
          onChange={setSwitchChecked}
        />
      </section>

      <section className="site-container site-max-w mb-10">
        <h2 className="mb-6 text-2xl font-semibold underline">Cards</h2>

        {posts?.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post._id}>
                <Card elevation="md" className="group h-full" noPadding>
                  <Link
                    className="flex flex-col text-lg font-semibold transition-colors group-hover:bg-gray-50"
                    href={`/posts/${post?.slug?.current}`}
                    aria-label={post?.title || "Link to Post"}
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <SanityImage
                        image={post?.mainImage as SanityAssetDocument}
                        fill
                        className="z-10 object-cover"
                      />

                      <div className="absolute inset-0 z-20 bg-black/0 transition-colors group-hover:bg-black/50" />
                    </div>

                    <div className="flex flex-col gap-y-2 px-4 py-6">
                      {post?.title}

                      {post?.description && (
                        <p className="text-sm font-normal text-gray-700">
                          {post?.description}
                        </p>
                      )}

                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="size-4 pt-4 text-current transition-colors group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No posts found</p>
        )}
      </section>
    </>
  );
}
