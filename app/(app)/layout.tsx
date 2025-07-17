import DesktopNav from "@/components/DesktopNav";
import Header from "@/components/Header";
import { Spinner } from "@/components/Spinner";
import React, { Suspense } from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col lg:overflow-hidden">
      <Header />
      <section className="lg:grid lg:grid-cols-[16rem_auto]">
        <DesktopNav />
        <div className="overflow-y-auto lg:h-[calc(100vh-76px)]">
          <Suspense fallback={<Spinner/>}>{children}</Suspense>
        </div>
      </section>
    </main>
  );
}

export default AppLayout;
