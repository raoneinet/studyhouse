import { Profile } from "@/components/profile/profile"
import { PageTitle } from "@/components/titles/pageTitle"

const Account = () => {
    return (
        <div>
            <PageTitle
                title="Perfil"
                style="text-2xl font-bold text-slate-800 pb-5"
            />
            <Profile />
        </div>
    )
}

export default Account