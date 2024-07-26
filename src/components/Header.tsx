import { SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { FilePlus2 } from "lucide-react"

function Header() {
    return (
        <div className="flex justify-between items-center bg-white shadow-sm">
            <Link href="/dashboard" className="text-2xl">
                Chat to <span className="text-indigo-600">PDF</span>
            </Link>
            <SignedIn>
                <div className="flex items-center space-x-2">
                    <Button asChild variant="link" className="hidden md:flex">
                        <Link href="/dashboard/upgrade">Pricing</Link>
                    </Button>
                    <Button asChild variant="outline"  >
                        <Link href="/dashboard">My Documents</Link>
                    </Button>
                    <Button asChild variant="link" className="hidden md:flex">
                        <Link href="/dashboard/upload">
                            <FilePlus2 className=" text-indigo-600" />
                        </Link>
                    </Button>
                    {/* upgrade button */}
                    <UserButton />
                </div>
            </SignedIn>
        </div>
    )
}

export default Header