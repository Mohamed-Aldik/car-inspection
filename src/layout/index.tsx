import { ReactNode } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Box bgColor="gray.50">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}
