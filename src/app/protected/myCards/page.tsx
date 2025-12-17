"use client"
import { Title } from "@/components/title/title"
import { SearchBar } from "@/components/search/searchbar"
import { ItemCard } from "@/components/itemCard/itemCard"
import { ItemDetailSidebar } from "@/components/itemCard/itemDetailSidebar"
import {useGetAllCardsQuery} from "@/app/reducer/userReducer"
import { Card } from "@/types/card"

const MyCards = () => {

    const {data} = useGetAllCardsQuery([])

    console.log(data)
    return (
        <div className="md:max-w-full">
            <Title
                title="Meus Cards"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="flex w-full md:gap-3">
                <div className="flex-1 md:flex-2 flex flex-col gap-3">
                    <SearchBar/>
                    {data?.subjects.map((item: Card) => (
                        <ItemCard key={item.id} card={item}/>
                    ))}
                    
                </div>
                <div className="hidden lg:block flex-1 bg-white rounded-lg p-3 h-fit border">
                    <ItemDetailSidebar />
                </div>
            </div>
        </div>
    )
}

export default MyCards