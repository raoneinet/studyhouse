import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const FormDialog = ({ title, form, desc, links }: any) => {
    return (
        <Dialog>
            <DialogTrigger className="text-slate-800 cursor-pointer">{title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Studyhouse</DialogTitle>
                    <DialogDescription>
                        {desc}
                    </DialogDescription>
                </DialogHeader>
                {form}
                <div>
                    {links}
                </div>
            </DialogContent>
        </Dialog>
    )
}