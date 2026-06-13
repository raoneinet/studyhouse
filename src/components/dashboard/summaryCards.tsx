type Props = {
    title: string
    total: number | string
    Icon?: any
    txtColor?: string
    iconColor?: string
}

export const SummaryCards = ({total, title, Icon, txtColor, iconColor}: Props)=>{
    return(
        <div className="bg-white flex flex-1 justify-between items-center border rounded-2xl md:p-6 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-1">
                <span className="text-slate-500 text-sm font-medium">{title}</span>
                <span className={`font-black text-3xl ${txtColor}`}>{total}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
                <span className={`${iconColor} w-8 h-8 flex items-center justify-center`}>{Icon}</span>
            </div>
        </div>
    )
}