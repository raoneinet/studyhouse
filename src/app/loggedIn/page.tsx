import { Navigation } from "@/app/ui/menu/navigation"
import { CreateItem } from "@/app/ui/createItem/createItem"

export const LoggedIn = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-5">
            <Navigation />
            <div className=" bg-white my-5 rounded-lg p-3 flex-1">
                <CreateItem/>
            </div>
        </div>
    )
}