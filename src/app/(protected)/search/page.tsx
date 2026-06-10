"use client"
import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { LessonCard } from "@/components/lessonCards/lessonCard"
import { LessonCardSkeleton } from "@/components/lessonCards/lessonCardSkeleton"
import { LessonDetailSidebar } from "@/components/lessonCards/lessonDetailSidebar"
import { LessonDetailSidebarSkeleton } from "@/components/lessonCards/lessonDetailSidebarSkeleton"
import { useGetAllLessonsQuery, useLazyGetLessonByIdQuery } from "@/app/reducer/lessonsApi"
import { Subject } from "@/types/subject"
import { EmptyState } from "@/components/emptyState/emptyState"
import { UserHeader } from "@/components/header/userHeader"

const SearchContent = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get("q") || ""

    const [selectCard, setSelectCard] = useState<any | null>(null)
    const [page, setPage] = useState(1)
    const limit = 10

    // Using getAllLessons but with the q parameter
    const { data, isLoading } = useGetAllLessonsQuery({ page, limit, q: query }, { skip: !query })
    const [triggerGetSubjectById, { data: selectedCard, isFetching }] = useLazyGetLessonByIdQuery()

    useEffect(() => {
        if (data?.data && data.data.length > 0) {
            const isSelectedCardInPage = data.data.some((item: any) => item.id === selectedCard?.id);
            if (!isSelectedCardInPage && !isFetching) {
                triggerGetSubjectById(data.data[0].id, true)
            }
        }
    }, [data, selectedCard, isFetching, triggerGetSubjectById])

    const handleSelectCard = async (id: number) => {
        try {
            const result = await triggerGetSubjectById(id, true).unwrap()
            setSelectCard(result.id)
        } catch (error) {
            console.log("Erro ao buscar por assunto por ID: ", error)
        }
    }

    const closeMobileModal = () => setSelectCard(null)

    return (
        <div className="md:max-w-full">
            <UserHeader
                title={query ? `Resultados para "${query}" (${data?.totalItems ?? 0})` : "Pesquisa"}
                subtitle="Busque por assuntos criados"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="flex w-full md:gap-3">
                <div className="flex-1 md:flex-2 flex flex-col gap-3">
                    <div className={`flex-1 md:flex-2 flex flex-col gap-3`}>
                        {(!query) ? (
                            <div className="text-center text-slate-500 py-10">Digite algo para pesquisar</div>
                        ) : isLoading ? (
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
                    {data?.data && data.data.length !== 0 &&
                        <div className="flex gap-5 items-center justify-center mt-4">
                            <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1} className="disabled:opacity-50">
                                Anterior
                            </button>
                            <p>Página {page} de {data?.totalPages || 1}</p>
                            <button onClick={() => setPage(prev => prev + 1)} disabled={page >= (data?.totalPages ?? 1)} className="disabled:opacity-50">
                                Próxima
                            </button>
                        </div>
                    }
                </div>
                <div className={`${selectCard ? "flex fixed top-0 right-0 bottom-0 left-0 z-50" : "hidden"} md:z-0 md:sticky lg:block md:flex-2 lg:flex-1 min-w-0 md:h-fit`}>
                    <div className={`sticky top-4 bg-white rounded-lg py-3 border overflow-y-auto`}>
                        {isFetching || (isLoading && !selectedCard && query) ? (
                            <LessonDetailSidebarSkeleton />
                        ) : (
                            <LessonDetailSidebar selectedCard={selectedCard} closeMobileModal={closeMobileModal} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const SearchPage = () => {
    return (
        <Suspense fallback={<div className="text-center text-slate-500 py-10">Carregando pesquisa...</div>}>
            <SearchContent />
        </Suspense>
    )
}

export default SearchPage
