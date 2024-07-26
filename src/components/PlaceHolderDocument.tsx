"use client"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'

function PlaceHolderDocument() {
    const router = useRouter()
    const HandleClick = () => {
        // check if user free or pro and give file limit 

        router.push('/dashboard/upload')
    }
    return (
        <Button className="flex flex-col items-center justify-center h-80 w-64 rounded-xl bg-gray-200 drop-shadow-md text-gray-400 border-dashed border-2 border-gray-300  "
            onClick={HandleClick}
        >
            <PlusCircleIcon className="w-16 h-16" />
            <p> Add a document</p>
        </Button>
    )
}

export default PlaceHolderDocument
