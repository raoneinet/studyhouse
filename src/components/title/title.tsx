
type Props = {
    title: string
    subtitle?: string
    style: string
}

export const Title = ({title, subtitle, style}: Props)=>{
    return (
        <div className={style}>
            <h2>{title}</h2>
            <p className="text-sm font-normal text-slate-700">{subtitle}</p>
        </div>
    )
}