import { Navigation } from "@/app/ui/menu/navigation"
import { CreateItem } from "@/app/ui/createItem/createItem"

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-5">
            Dashboard
        </div>
    )
}

export default LoggedInLayout