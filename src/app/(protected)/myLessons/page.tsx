"use client"
import { useEffect, useState } from "react"
import { PageTitle } from "@/components/titles/pageTitle"
import { SearchBar } from "@/components/search/searchbar"
import { LessonCard } from "@/components/lessonCards/lessonCard"
import { LessonCardSkeleton } from "@/components/lessonCards/lessonCardSkeleton"
import { LessonDetailSidebar } from "@/components/lessonCards/lessonDetailSidebar"
import { LessonDetailSidebarSkeleton } from "@/components/lessonCards/lessonDetailSidebarSkeleton"
import { useGetAllLessonsQuery } from "@/app/reducer/lessonsApi"
import { useLazyGetLessonByIdQuery } from "@/app/reducer/lessonsApi"
import { Subject } from "@/types/subject"
import { EmptyState } from "@/components/emptyState/emptyState"
import { UserHeader } from "@/components/header/userHeader"
//import { GridListView } from "@/components/gridListView/gridListView"

const MyCards = () => {

    const [selectCard, setSelectCard] = useState<any | null>(null)
    // const [viewList, setViewList] = useState(() => {
    //     const list = localStorage.getItem("listview")
    //     return list ? JSON.parse(list) : false
    // })

    const [page, setPage] = useState(1)
    const limit = 10

    const { data, isLoading } = useGetAllLessonsQuery({ page, limit })
    const [triggerGetSubjectById, { data: selectedCard, isFetching }] = useLazyGetLessonByIdQuery()

    const handleSelectCard = async (id: number) => {
        try {
            const result = await triggerGetSubjectById(id, true).unwrap()
            setSelectCard(result.id)
        } catch (error) {
            console.log("Erro ao buscar por assunto por ID: ", error)
        }
    }

    //const handleView = (view: boolean) => setViewList(view)

    const closeMobileModal = ()=> setSelectCard(null)

    // useEffect(() => {
    //     localStorage.setItem("listview", JSON.stringify(viewList))
    // }, [viewList])

    useEffect(() => {
        if (data?.data && data.data.length > 0) {
            const isSelectedCardInPage = data.data.some((item: any) => item.id === selectedCard?.id);
            if (!isSelectedCardInPage && !isFetching) {
                triggerGetSubjectById(data.data[0].id, true)
            }
        }
    }, [data, selectedCard, isFetching, triggerGetSubjectById])

    return (
        <div className="md:max-w-full">
            <UserHeader
                title={`Meus Cards (${data?.totalItems ?? 0})`}
                subtitle="Todos os meus cards de estudo"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="flex w-full md:gap-3">
                <div className="flex-1 md:flex-2 flex flex-col gap-3">
                    <div className={`flex-1 ${/*viewList ? "md:flex-2 flex flex-col" : "grid lg:grid-cols-2 xl:grid-cols-3"*/ "md:flex-2 flex flex-col"} gap-3`}>
                        {isLoading ? (
                            <>
                                <LessonCardSkeleton />
                                <LessonCardSkeleton />
                                <LessonCardSkeleton />
                            </>
                        ) : data?.data.length === 0 ? (
                            <EmptyState />
                        ) : (
                            data?.data.map((item: Subject) => (
                                <LessonCard key={item.id} card={item} handleSelectCard={handleSelectCard} />
                            ))
                        )}
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
                <div className={`${selectCard ? "flex fixed top-0 right-0 bottom-0 left-0 z-50" : "hidden"} md:z-0 md:sticky lg:block md:flex-2 lg:flex-1 min-w-0 md:h-fit`}>
                    <div className={`sticky top-4 bg-white rounded-2xl py-3 border overflow-y-auto`}>
                        {isFetching || (isLoading && !selectedCard) ? (
                            <LessonDetailSidebarSkeleton />
                        ) : (
                            <LessonDetailSidebar selectedCard={selectedCard} closeMobileModal={closeMobileModal}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCards