import React, { useState, useMemo } from "react";
import { Stack, Text, Button, Flex } from "@sanity/ui";
import { ObjectInputProps, SlugValue, useFormValue } from "sanity";
import { CopyIcon, CheckmarkIcon, ErrorOutlineIcon } from "@sanity/icons";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type PostSlugInputProps = ObjectInputProps<SlugValue>;

const PostSlugInput: React.FC<PostSlugInputProps> = (props) => {
  const { renderDefault, value } = props;

  // Document info
  const docId = useFormValue(["_id"]) as string | undefined;
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const isDraft = docId?.startsWith("drafts.") ?? false;
  const slug = value?.current;

  // Derive URLs directly from slug and docId instead of using state + effect
  const { fullUrl, presentationUrl } = useMemo(() => {
    if (!slug) {
      return { fullUrl: "", presentationUrl: "" };
    }

    const full = `${BASE_URL}/posts/${slug}`;

    let presentation = "";
    if (docId) {
      // Strip "drafts." if you like, though it's not strictly required here
      const cleanedDocId = docId.replace(/^drafts\./, "");
      presentation = `${BASE_URL}/studio/presentation/page/${cleanedDocId}?preview=/${slug}`;
    }

    return { fullUrl: full, presentationUrl: presentation };
  }, [slug, docId]);

  const handleCopyId = async () => {
    if (docId) {
      try {
        await navigator.clipboard.writeText(docId);
        setCopyStatus("success");
        setTimeout(() => setCopyStatus("idle"), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
        setCopyStatus("error");
        setTimeout(() => setCopyStatus("idle"), 2000);
      }
    }
  };

  return (
    <Stack space={2}>
      {/* Render the default slug input UI */}
      {renderDefault(props)}

      {/* If no slug at all */}
      {!slug && (
        <Text size={1} muted style={{ marginTop: 16 }}>
          No valid slug found. Please set a slug to generate the Full &
          Presentation URLs.
        </Text>
      )}

      {/* Full URL (always show if slug exists) */}
      {slug && (
        <>
          <Text size={1} style={{ marginTop: 16 }} muted>
            Full URL{isDraft ? " (Draft/Unpublished)" : ""}:
          </Text>
          {fullUrl ? (
            <Text size={2} style={{ marginTop: 8 }}>
              <a href={fullUrl} target="_blank" rel="noopener noreferrer">
                {fullUrl}
              </a>
            </Text>
          ) : (
            <Text size={1} muted style={{ marginTop: 8 }}>
              Generating Full URL...
            </Text>
          )}
        </>
      )}

      {/* Presentation URL (only if slug + at least one section) */}
      {slug && (
        <>
          <Text size={1} style={{ marginTop: 16 }} muted>
            Presentation Mode:
          </Text>

          {presentationUrl ? (
            <Text size={2} style={{ marginTop: 8 }}>
              <Button
                as="a"
                href={presentationUrl}
                tone="default"
                mode="default"
                text="Open In Presentation Mode"
                className="hover:no-underline!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open In Presentation Mode"
              />
            </Text>
          ) : (
            <Text size={1} muted style={{ marginTop: 8 }}>
              Generating Presentation URL...
            </Text>
          )}
        </>
      )}

      {docId && (
        <>
          <Text size={1} style={{ marginTop: 16 }} muted>
            Post ID:
          </Text>
          <Flex align="center" gap={2}>
            <Text size={2} style={{ fontFamily: "monospace" }}>
              {docId}
            </Text>
            <Flex align="center" gap={2}>
              <Button
                mode="ghost"
                tone="primary"
                onClick={handleCopyId}
                icon={CopyIcon}
                title="Copy ID to clipboard"
                aria-label="Copy ID to clipboard"
              />

              {copyStatus === "success" && (
                <Text size={2}>
                  <CheckmarkIcon style={{ color: "#15a34a" }} />
                </Text>
              )}
              {copyStatus === "error" && (
                <Text size={2}>
                  <ErrorOutlineIcon style={{ color: "#dc2626" }} />
                </Text>
              )}
            </Flex>
          </Flex>
        </>
      )}
    </Stack>
  );
};

export default PostSlugInput;
