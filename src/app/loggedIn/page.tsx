import { CreateItem } from "@/components/createItem/createItem"

export const LoggedIn = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5">
            <div className=" bg-white my-5 rounded-lg p-3 flex-1">
                <CreateItem/>
            </div>
        </div>
    )
}