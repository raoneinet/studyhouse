import { Profile } from "@/components/profile/profile"
import { UserHeader } from "@/components/header/userHeader"
import { useTranslations } from "next-intl"

const Account = () => {
    const t = useTranslations('Pages');
    return (
        <div>
            <UserHeader
                title={t('accountTitle')}
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <Profile />
        </div>
    )
}

export default Account