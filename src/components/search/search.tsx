import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FilterItems } from "../filter/filterItems"

export const SearchBar = () => {
    return (
        <div className="p-4 bg-white rounded-lg border flex gap-3">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                    type="text"
                    placeholder="buscar..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <FilterItems />
        </div>
    )
}