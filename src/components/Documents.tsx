import PlaceHolderDocument from "./PlaceHolderDocument"

function Documents() {
    return (
        <div className="flex flex-wrap p-5 bg-gray-100 justify-center lg:justify-start
         rounded-sm gap-5 max-w-7xl mx-auto">
            {/* map through the documents */}
            {/* placeholder document */}
            <PlaceHolderDocument />
        </div>
    )
}

export default Documents
