import DesktopNav from "@/components/DesktopNav";
import Header from "@/components/Header";
import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    // <main className="lg:h-full lg:overflow-hidden">
    //   <Header />
    //   <section className="lg:grid lg:h-[calc(100%-76px)] lg:grid-cols-[16rem_auto] lg:overflow-y-hidden">
    //     <DesktopNav />
    //     <div className="">{children}</div>
    //   </section>
      // </main>
      <main className="flex flex-col lg:overflow-hidden">
          <Header />
          <section className="lg:grid lg:grid-cols-[16rem_auto]">
              <DesktopNav />
              <div className="overflow-y-auto lg:h-[calc(100vh-76px)]">
                    {children}
              </div>
          </section>
      </main>
  );
}

export default AppLayout;
