import '../globals.css'
import {Box, Flex, Section, Text, Theme} from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          {children}
      </>
  );
}
