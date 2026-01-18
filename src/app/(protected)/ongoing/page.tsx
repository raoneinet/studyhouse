"use client"
import { useEffect, useState } from "react"
import { PageTitle } from "@/components/titles/pageTitle"
import { SearchBar } from "@/components/search/searchbar"
import { LessonCard } from "@/components/lessonCards/lessonCard"
import { LessonDetailSidebar } from "@/components/lessonCards/lessonDetailSidebar"
import { useLazyGetLessonByIdQuery } from "@/app/reducer/lessonsApi"
import { useGetAllOngoingsQuery } from "@/app/reducer/lessonsApi"
import { Subject } from "@/types/subject"
import { EmptyState } from "@/components/emptyState/emptyState"
import { GridListView } from "@/components/gridListView/gridListView"

const MyCards = () => {

    const [viewList, setViewList] = useState(()=>{
        const list = localStorage.getItem("ongolist")
        return list ? JSON.parse(list) : true
    })
    const [selectCard, setSelectCard] = useState<Subject | any>(null)
    const [page, setPage] = useState(1)
    const limit = 10

    const { data } = useGetAllOngoingsQuery({ page, limit })
    const [triggerGetSubjectById] = useLazyGetLessonByIdQuery()

    const handleSelectCard = async (id: number) => {
        try {
            const result = await triggerGetSubjectById(id).unwrap()
            setSelectCard(result)
        } catch (error: any) {
            console.log("Erro ao bucar itens Ongoing por ID. ", error)
        }
    }

    const handleView = (view: boolean) => setViewList(view)

    const closeMobileModal = ()=> setSelectCard(null)

    useEffect(()=>{
        localStorage.setItem("ongolist", JSON.stringify(viewList))
    },[viewList])

    return (
        <div className="md:max-w-full">
            <PageTitle
                title={`Em Andamento (${data?.totalItems ?? 0})`}
                subtitle="Todos os meus cards de estudo em andamento"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="flex w-full md:gap-3">
                <div className="flex-1 md:flex-2 flex flex-col gap-3">
                    <div className="p-4 bg-white rounded-lg border flex gap-3">
                        <SearchBar />
                        <GridListView
                            handleView={handleView}
                            viewList={viewList}
                        />
                    </div>
                    <div className={`flex-1 ${viewList ? "md:flex-2 flex flex-col" : "grid lg:grid-cols-2 xl:grid-cols-3"} gap-3`}>
                        {data?.data.map((item: Subject) =>
                            item.status === "ongoing" && (
                                <LessonCard key={item.id} card={item} handleSelectCard={handleSelectCard} />
                            ))
                        }
                        {data?.data.length === 0 && <EmptyState />}
                    </div>
                    {data?.data.length !== 0 &&
                        <div className="flex gap-5 items-center justify-center">
                            <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>
                                Anterior
                            </button>
                            <p>Página {page} de {data?.totalPages || 1}</p>
                            <button onClick={() => setPage(prev => prev + 1)} disabled={page >= (data?.totalPages ?? 1)}>
                                Próxima
                            </button>
                        </div>
                    }
                </div>
                <div className={`${selectCard ? "flex fixed top-0 right-0 bottom-0 left-0 scroll-y-hidden" : "hidden"} md:sticky lg:block md:flex-2 lg:flex-1 min-w-0 md:h-fit`}>
                    <div className={`sticky top-4 bg-white rounded-lg py-3 border`}>
                        <LessonDetailSidebar selectCard={selectCard} closeMobileModal={closeMobileModal}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCards