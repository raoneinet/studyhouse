"use client"
import { useState } from "react"
import { Title } from "@/components/title/title"
import { SearchBar } from "@/components/search/searchbar"
import { ItemCard } from "@/components/itemCard/itemCard"
import { ItemDetailSidebar } from "@/components/itemCard/itemDetailSidebar"
import { useGetAllCardsQuery } from "@/app/reducer/userReducer"
import { Subject } from "@/types/subject"

const MyCards = () => {

    const { data = { subjects: [] } } = useGetAllCardsQuery()
    const [selectCard, setSelectCard] = useState<Subject | any>(null)
    const { subjects } = data

    return (
        <div className="md:max-w-full">
            <Title
                title="Meus Cards"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="flex w-full md:gap-3">
                <div className="flex-1 md:flex-2 flex flex-col gap-3">
                    <SearchBar />
                    {subjects.map((item: Subject) => (
                        <ItemCard key={item.id} card={item} handleSelectCard={setSelectCard} />
                    ))}
                </div>
                <div className="hidden lg:block flex-1">
                    <div className="sticky top-4 bg-white rounded-lg p-3 border">
                        <ItemDetailSidebar selectCard={selectCard} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCards