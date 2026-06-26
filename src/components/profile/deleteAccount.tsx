import { Button } from "../ui/button"
import { DeleteAccountButton } from "./deleteAccountButton"
import { PauseAccountButton } from "./pauseAccountButton"
import { useTranslations } from "next-intl"

export const DeleteAccount = () => {

    const t = useTranslations('Profile');

    return (
        <>
            <div className="w-full flex flex-col gap-4">
                <div>
                    <p>{t('deleteAccountDesc')}</p>
                    <p>
                        <span className="font-bold uppercase">{t('importantNote')}</span>{t('deleteWarning')}
                    </p>
                </div>
                <div className="flex gap-3 place-self-end">
                    <PauseAccountButton />
                    <DeleteAccountButton/>
                </div>
            </div>
        </>
    )
}