import { SearchBar } from "../search/searchbar"
import { MenuSidebarFooter } from "../sidebar/sidebar-footer"
import { PageTitle } from "../titles/pageTitle"

type Props = {
    title: string
    subtitle?: string
    style?: string
    children?: React.ReactNode
}

export const UserHeader = ({title, subtitle, style, children}: Props) => {
    return (
        <div className="flex flex-col-reverse md:flex-row w-full items-start justify-between">
            <PageTitle
                title={title}
                subtitle={subtitle}
                style={style}
            />
            <div className="flex w-fit gap-2 items-center justify-between">
                {children}
                <SearchBar/> 
                <MenuSidebarFooter/>
            </div>
        </div>
    )
}