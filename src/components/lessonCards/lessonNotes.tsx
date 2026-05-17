"use client"
import { useState } from "react"
import { useGetNotesQuery, useAddNoteMutation, useDeleteNoteMutation } from "@/app/reducer/lessonsApi"
import { Trash2, Send } from "lucide-react"

type Props = {
    lessonId: number
}

export const LessonNotes = ({ lessonId }: Props) => {
    const { data, isLoading } = useGetNotesQuery(lessonId)
    const [addNote, { isLoading: isAdding }] = useAddNoteMutation()
    const [deleteNote] = useDeleteNoteMutation()
    
    const [content, setContent] = useState("")
    const [isAddingNote, setIsAddingNote] = useState(false)

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
            <div className="flex justify-between items-center">
                <span className="font-bold text-slate-700">Anotações ({data?.data?.length || 0})</span>
                {!isAddingNote && (
                    <button
                        onClick={() => setIsAddingNote(true)}
                        className="text-sm text-blue-600 font-semibold hover:underline px-2 py-1"
                    >
                        Adicionar nota
                    </button>
                )}
            </div>
            
            {isAddingNote && (
                <form onSubmit={handleAddNote} className="flex flex-col gap-2">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Escreva uma nova anotação ou comentário..."
                        className="w-full border rounded-md p-3 text-sm text-slate-700 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
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
                            className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isAdding || !content.trim()}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors"
                        >
                            <Send className="w-4 h-4" />
                            {isAdding ? "A Guardar..." : "Salvar"}
                        </button>
                    </div>
                </form>
            )}

            <div className="flex flex-col gap-3">
                {isLoading ? (
                    <span className="text-sm text-slate-500">A carregar anotações...</span>
                ) : (
                    data?.data?.length === 0 ? (
                        <span className="text-sm text-slate-500 italic">Nenhuma anotação ainda.</span>
                    ) : (
                        data?.data?.map((note: any) => (
                            <div key={note.id} className="bg-slate-100 p-3 rounded-md flex justify-between group">
                                <div className="flex flex-col gap-1 w-full">
                                    <p className="text-sm text-slate-700 whitespace-pre-wrap">{note.content}</p>
                                    <span className="text-xs text-slate-400">
                                        {new Date(note.createdAt).toLocaleString()}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleDeleteNote(note.id)}
                                    className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                                    title="Remover anotação"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )
                )}
            </div>
        </div>
    )
}
