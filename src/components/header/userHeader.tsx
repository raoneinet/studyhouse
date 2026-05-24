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
        <div className="flex w-full items-start justify-between">
            <PageTitle
                title={title}
                subtitle={subtitle}
                style={style}
            />
            <div className="flex w-fit items-center justify-end gap-3">
                {children}
                <SearchBar/> 
                <MenuSidebarFooter/>
            </div>
        </div>
    )
}