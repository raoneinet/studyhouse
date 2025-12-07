import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LoginForm } from "@/app/pages/login/page"

export const LoginDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Studyhouse</DialogTitle>
                    <DialogDescription>
                        Faça login para organizar seus estudos de forma fácil
                    </DialogDescription>
                </DialogHeader>
                <LoginForm/>
            </DialogContent>
        </Dialog>
    )
}