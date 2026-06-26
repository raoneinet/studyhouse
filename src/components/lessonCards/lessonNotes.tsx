"use client"
import { useState } from "react"
import { useGetNotesQuery, useAddNoteMutation, useDeleteNoteMutation } from "@/app/reducer/lessonsApi"
import { Trash2, Send, ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "next-intl"

type Props = {
    lessonId: number
}

export const LessonNotes = ({ lessonId }: Props) => {
    const { data, isLoading } = useGetNotesQuery(lessonId)
    const [addNote, { isLoading: isAdding }] = useAddNoteMutation()
    const [deleteNote] = useDeleteNoteMutation()

    const [content, setContent] = useState("")
    const [isAddingNote, setIsAddingNote] = useState(false)
    const [isNotesVisible, setIsNotesVisible] = useState(false)
    const t = useTranslations('LessonCards');

    const handleAddNote = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!content.trim()) return

        try {
            await addNote({ lessonId, content }).unwrap()
            setContent("")
            setIsAddingNote(false)
        } catch (error) {
            console.error("Erro ao adicionar nota", error)
        }
    }

    const handleDeleteNote = async (noteId: number) => {
        try {
            await deleteNote({ noteId, lessonId }).unwrap()
        } catch (error) {
            console.error("Erro ao remover nota", error)
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-700">{t('notes')} ({data?.data?.length || 0})</span>
                    <button
                        onClick={() => setIsNotesVisible(!isNotesVisible)}
                        className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-xl transition-colors font-medium flex items-center gap-1"
                    >
                        {isNotesVisible ? t('hide') : t('show')}
                        {isNotesVisible ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                </div>
                {!isAddingNote && (
                    <button
                        onClick={() => setIsAddingNote(true)}
                        className="text-sm text-orange-600 font-semibold hover:underline px-2 py-1"
                    >
                        {t('addNote')}
                    </button>
                )}
            </div>
            <div className="flex flex-col gap-3">
                {isAddingNote && (
                    <form onSubmit={handleAddNote} className="flex flex-col gap-2 py-2">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder={t('placeholderNote')}
                            className="w-full border rounded-xl p-3 text-sm text-slate-700 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                            rows={3}
                            autoFocus
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsAddingNote(false)
                                    setContent("")
                                }}
                                className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                            >
                                {t('cancel')}
                            </button>
                            <button
                                type="submit"
                                disabled={isAdding || !content.trim()}
                                className="bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors"
                            >
                                <Send className="w-4 h-4" />
                                {isAdding ? t('loading') : t('save')}
                            </button>
                        </div>
                    </form>
                )}
                {isNotesVisible && (
                    <div className="flex flex-col gap-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                        {isLoading ? (
                            <span className="text-sm text-slate-500">{t('loadingNotes')}</span>
                        ) : (
                            data?.data?.length === 0 ? (
                                <span className="text-sm text-slate-500 italic">{t('noNotes')}</span>
                            ) : (
                                data?.data?.map((note: any) => (
                                    <div key={note.id} className="bg-slate-100 p-3 rounded-xl flex justify-between group">
                                        <div className="flex flex-col gap-1 w-full">
                                            <p className="text-sm text-slate-700 whitespace-pre-wrap">{note.content}</p>
                                            <span className="text-xs text-slate-400">
                                                {new Date(note.createdAt).toLocaleString()}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteNote(note.id)}
                                            className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                                            title={t('removeNote')}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
