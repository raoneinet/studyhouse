
type Props = {
    type?: "button" | "submit" | "reset" | undefined
    link: ()=>void
    value: string
}

export const LinkButton = ({type, link, value}: Props) => {
    return (
        <button
            type={type}
            onClick={link}
            className="text-sm text-orange-600 font-medium"
        >
            {value} →
        </button>
    )
}