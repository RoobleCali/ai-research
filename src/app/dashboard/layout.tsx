import Header from "@/components/Header"
import { ClerkLoaded } from "@clerk/nextjs"

export default function Dashboardlayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <ClerkLoaded>
            <div className="flex flex-1 flex-col h-screen ">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </ClerkLoaded>
    )
}
