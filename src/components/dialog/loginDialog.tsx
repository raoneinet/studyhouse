import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const LoginDialog = ({title, form, desc}: any) => {
    return (
        <Dialog>
            <DialogTrigger className="text-slate-800">{title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Studyhouse</DialogTitle>
                    <DialogDescription>
                        {desc}
                    </DialogDescription>
                </DialogHeader>
                {form}
            </DialogContent>
        </Dialog>
    )
}