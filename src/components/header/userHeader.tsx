import { SearchBar } from "../search/searchbar"
import { PageTitle } from "../titles/pageTitle"

export const UserHeader = ({title, subtitle, style}: {title: string, subtitle: string, style: string}) => {
    return (
        <div className="flex w-full items-start justify-between">
            <PageTitle
                title={title}
                subtitle={subtitle}
                style={style}
            />
            <SearchBar/>
        </div>
    )
}