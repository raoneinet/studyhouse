"use client"
import { useState } from "react"
import { Title } from "@/components/title/title"
import { SearchBar } from "@/components/search/searchbar"
import { ItemCard } from "@/components/itemCard/itemCard"
import { ItemDetailSidebar } from "@/components/itemCard/itemDetailSidebar"
import { useGetAllSubjectsQuery } from "@/app/reducer/userReducer"
import { useLazyGetSubjectByIdQuery } from "@/app/reducer/userReducer"
import { Subject } from "@/types/subject"

const MyCards = () => {

    const { data = [] } = useGetAllSubjectsQuery()
    const [selectCard, setSelectCard] = useState<Subject | any>(null)

    const [triggerGetSubjectById, {data: selectedCard, isFetching}] = useLazyGetSubjectByIdQuery()

    const handleSelectCard = async (id: number)=>{
        try{
            const result = await triggerGetSubjectById(id).unwrap()
            setSelectCard(result)
        }catch(error){
            console.log("Erro ao buscar por assunto por ID: ", error)
        }
    }

    return (
        <div className="md:max-w-full">
            <Title
                title="Meus Cards"
                subtitle="Todos os meus cards de estudo"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="flex w-full md:gap-3">
                <div className="flex-1 md:flex-2 flex flex-col gap-3">
                    <SearchBar />
                    {data.map((item: Subject) => (
                        <ItemCard key={item.id} card={item} handleSelectCard={handleSelectCard} />
                    ))}
                </div>
                <div className="hidden lg:block flex-1 min-w-0">
                    <div className="sticky top-4 bg-white rounded-lg py-3 border">
                        <ItemDetailSidebar selectCard={selectCard} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCards