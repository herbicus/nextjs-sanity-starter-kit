import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/DisableDraftMode";

import { ScrollProvider } from "@/context/ScrollContext";

import Main from "@/templates/Main";

import {
  faAddressCard,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import type { NavItem } from "@/components/Navigation/Header";

export const socialLinks = [
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com",
    icon: faLinkedin,
  },
  {
    name: "Instagram",
    value: "https://www.instagram.com",
    icon: faInstagram,
  },
  { name: "X/Twitter", value: "https://x.com", icon: faXTwitter },
  {
    name: "Facebook",
    value: "https://www.facebook.com",
    icon: faFacebook,
  },
];

interface SitePreviewLayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Home", value: "/" },
  { name: "About", value: "/about" },
  { name: "Blog", value: "/posts" },
  { name: "Contact", value: "/contact" },
];

export default async function SitePreviewLayout({
  children,
}: SitePreviewLayoutProps) {
  const { isEnabled } = await draftMode();
  return (
    <ScrollProvider>
      <Main navItems={navItems} socialNavItems={socialLinks}>
        {children}
      </Main>

      <SanityLive />
      {isEnabled ? (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      ) : null}
    </ScrollProvider>
  );
}
