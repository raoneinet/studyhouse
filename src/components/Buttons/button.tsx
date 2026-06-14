
type Props = {
    routeLink: ()=>void
    bgColor: string
    txtColor: string
    hoverColor: string
    icon: any
    value: string
}

export const Button = ({routeLink, bgColor, txtColor, hoverColor, icon, value}: Props) => {

    const Icon = icon

    return (
        <button
            onClick={routeLink}
            className={`flex items-center justify-center gap-2 p-3 md:px-4 md:py-3 ${bgColor} ${txtColor} rounded-xl md:rounded-2xl hover:${hoverColor} transition-colors`}
            title={value} // Accessibility and tooltip
        >
            <Icon className="w-5 h-5 md:w-4 md:h-4" />
            <span className="hidden md:inline text-sm font-medium">{value}</span>
        </button>
    )
}