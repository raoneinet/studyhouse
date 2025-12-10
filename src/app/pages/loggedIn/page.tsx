import { Navigation } from "@/app/ui/menu/navigation"
import { CreateItem } from "@/app/ui/createItem/createItem"

export const LoggedIn = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-5">
            <aside className="">
                <Navigation />
            </aside>
            <div className=" bg-white my-5 rounded-lg p-3 flex-1">
                {children}
            </div>
        </div>
    )
}