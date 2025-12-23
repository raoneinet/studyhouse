

type Props = {
    title: string
    total: string
    Icon?: any
    txtColor?: string
    iconColor?: string
}

export const SummaryCards = ({total, title, Icon, txtColor, iconColor}: Props)=>{
    return(
        <div className="bg-white flex flex-1 justify-between items-center border rounded-lg p-5">
            <div className="flex flex-col">
                <span className="text-slate-600">{title}</span>
                <span className={`font-bold text-xl ${txtColor}`}>{total}</span>
            </div>
            <div>
                <span className={`${iconColor}`}>{Icon}</span>
            </div>
        </div>
    )
}