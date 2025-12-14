import { Grid, List } from "lucide-react"
import { Button } from "../ui/button"

export const FilterItems = () => {
    return (
        <div className="flex border border-slate-200 rounded-lg overflow-hidden w-fit">
            <Button
                variant="ghost"
                className={`p-2`}
            >
                <Grid className="w-5 h-5" />
            </Button>
            <Button
                variant="ghost"
                className={`p-2 border-l border-slate-200 `}
            >
                <List className="w-5 h-5" />
            </Button>
        </div>
    )
}