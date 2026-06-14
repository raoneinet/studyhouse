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
        <div className="flex flex-col-reverse md:flex-row w-full items-start justify-between gap-4 md:gap-0 mb-4 md:mb-0">
            <PageTitle
                title={title}
                subtitle={subtitle}
                style={style}
            />
            <div className="flex w-full md:w-fit gap-3 items-center justify-end">
                {children}
                <SearchBar/> 
                <MenuSidebarFooter/>
            </div>
        </div>
    )
}