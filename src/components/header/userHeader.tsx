import { SearchBar } from "../search/searchbar"
import { MenuSidebarFooter } from "../sidebar/sidebar-footer"
import { PageTitle } from "../titles/pageTitle"

export const UserHeader = ({title, subtitle, style}: {title: string, subtitle: string, style: string}) => {
    return (
        <div className="flex w-full items-start justify-between">
            <PageTitle
                title={title}
                subtitle={subtitle}
                style={style}
            />
            <div className="flex w-fit items-center justify-end">
                <SearchBar/> 
                <MenuSidebarFooter/>
            </div>
        </div>
    )
}