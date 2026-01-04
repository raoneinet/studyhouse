import { Profile } from "@/components/profile/profile"
import { Title } from "@/components/title/title"

const Account = () => {
    return (
        <div>
            <Title
                title="Perfil"
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <Profile />
        </div>
    )
}

export default Account