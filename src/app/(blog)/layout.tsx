// src/app/(blog)/layout.tsx

import { SitePreviewLayout } from "@/layouts/SitePreviewLayout";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SitePreviewLayout>{children}</SitePreviewLayout>;
}
