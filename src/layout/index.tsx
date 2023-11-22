import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Box as="section">{children}</Box>
      <Footer />
    </>
  );
}
