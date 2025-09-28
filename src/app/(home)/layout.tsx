interface Props {
  children: React.ReactNode;
}

import { Navbar } from "@/modules/home/ui/components/navbar";
import React from "react";

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 flex flex-col px-4 pb-4">
        <div className="fixed inset-0 -z-10 w-full h-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadded_1px,transparent_1px)] [background-size:16px_16px]" />
        {children}
      </div>
    </main>
  );
};

export default Layout;
