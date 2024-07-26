"use client"
import { useDropzone } from "react-dropzone"
import { useCallback } from "react"
import { CircleArrowDown, RocketIcon } from "lucide-react"

function FileUploader() {
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive,
        isFocused, isDragAccept
    } = useDropzone({ onDrop })
    return (
        <div className="flex flex-col  mt-5 gap-4 items-center max-w-7xl mx-auto">
            {/* loading section */}
            <div {...getRootProps()}

                className={`border-2 border-indigo-600 text-indigo-600 w-[90%] 
             border-dashed rounded-lg p-10 h-96 flex items-center
              text-center justify-center ${isFocused || isDragAccept
                        ? "bg-indigo-300"
                        : "  bg-indigo-100"
                    }`} >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center">
                    {
                        isDragActive ? (
                            <>
                                <RocketIcon className="animate-ping h-20 w-20" />
                                <p>Drop the files here ...</p>

                            </>
                        ) : (
                            <>
                                <CircleArrowDown className="animate-bounce h-20 w-20" />
                                <p>Drag and drop some files here, or click to select files</p>

                            </>
                        )
                    }
                </div>

            </div>
        </div>

    )
}

export default FileUploader
