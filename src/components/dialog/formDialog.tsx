import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Logobrand } from "../header/logobrand"

export const FormDialog = ({ title, form, desc, links }: any) => {
    return (
        <Dialog>
            <DialogTrigger className="text-slate-800 cursor-pointer">{title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <Logobrand/>
                    </DialogTitle>
                    <DialogDescription>
                        {desc}
                    </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-visible">
                    {form}
                    <div>
                        {links}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}