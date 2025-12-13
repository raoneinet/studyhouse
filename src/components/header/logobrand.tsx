
type Props = {
    title: string
    subtitle?: string
}

export const Logobrand = ({title, subtitle}: Props) => {
    return (
        <div>
            <h3 className="text-neutral-800 font-bold text-3xl">{title}</h3>
            <p className="text-neutral-600">{subtitle}</p>
        </div>
    )
}