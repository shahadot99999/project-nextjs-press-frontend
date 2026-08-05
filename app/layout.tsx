import "./globals.css";
import { Roboto_Slab, Public_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const publicSansHeading = Public_Sans({subsets:['latin'],variable:'--font-heading'});

const robotoSlab = Roboto_Slab({subsets:['latin'],variable:'--font-serif'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-serif", robotoSlab.variable, publicSansHeading.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col suppressHydrationWarning">
         {/* Navbar */}
        {children}

        {/* Footer */}
        </body>
    </html>
  );
}