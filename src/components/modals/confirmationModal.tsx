import { Button } from "../ui/button"

type Props = {
    confirmAction: () => void
    cancelAction: ()=>void
    confirmLabel: string
    cancelLabel: string
    title: string
    subTitle: string
}
export const ConfirmationModal = ({ confirmAction, confirmLabel,  cancelLabel, cancelAction, title, subTitle }: Props) => {
    return (
        <div className="w-full h-full fixed z-50 top-0 right-0 bottom-0 left-0 bg-black/50 flex justify-center items-center">
            <div className="p-3 bg-white rounded-2xl">
                <div className="py-2 border-b text-center">
                    <p className="text-xl font-bold">{title}</p>
                    <p>
                        <span className="text-red-500 font-bold">IMPORTANTE! </span>
                        {subTitle}
                    </p>
                </div>
                <div className="flex justify-between py-2">
                    <div>
                        <Button
                            variant="default"
                            className="place-self-end"
                            onClick={cancelAction}
                        >
                            {cancelLabel}
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="outline"
                            className="place-self-end"
                            onClick={confirmAction}
                        >
                            {confirmLabel}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}