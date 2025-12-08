import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "@/app/pages/login/page"

export const LoginDialog = ({title, form}: any) => {
    return (
        <Dialog>
            <DialogTrigger>{title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Studyhouse</DialogTitle>
                    <DialogDescription>
                        Faça login para organizar seus estudos de forma fácil
                    </DialogDescription>
                </DialogHeader>
                {form}
            </DialogContent>
        </Dialog>
    )
}