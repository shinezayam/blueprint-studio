import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: "Services", alternates: pageAlternates(locale, "/services") };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
