import type { Metadata } from "next";
import "./globals.css"; // <--- THIS LINE IS ESSENTIAL

export const metadata: Metadata = {
  title: "Karvyn3D | Industrial 3D Printing",
  description: "Small scale manufacturing and prototyping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}