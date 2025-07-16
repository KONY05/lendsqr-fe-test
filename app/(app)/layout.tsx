import Header from "@/components/Header"
import React from "react"

function AppLayout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <Header/>
            <section>
            {children}
            </section>
        </main>
    )
}

export default AppLayout
