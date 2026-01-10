
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
            className={`flex items-center justify-center gap-2 px-4 py-3 ${bgColor} ${txtColor} rounded-lg hover:${hoverColor} transition-colors`}
        >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{value}</span>
        </button>
    )
}