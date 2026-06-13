"use client";

import { Button } from "@/components/ui/button";
import { Trash, Edit2, CheckCircle, Clock } from "lucide-react";
import { useDeleteLessonMutation, useUpdateStatusMutation } from "@/app/reducer/lessonsApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function RoadmapLessonItem({ lesson }: { lesson: any }) {
  const [deleteLesson] = useDeleteLessonMutation();
  const [updateStatus] = useUpdateStatusMutation();
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Tem certeza que deseja excluir esta lição?")) {
      try {
        await deleteLesson(lesson.id).unwrap();
        toast.success("Lição excluída");
        router.refresh();
      } catch (err) {
        toast.error("Erro ao excluir lição");
      }
    }
  };

  const handleStatus = async (status: string) => {
    try {
      await updateStatus({ id: lesson.id, status }).unwrap();
      toast.success("Status atualizado");
      router.refresh();
    } catch (err) {
      toast.error("Erro ao atualizar status");
    }
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border flex items-center gap-4 group">
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg truncate flex items-center gap-2">
          {lesson.title}
          <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-normal">
            {lesson.status}
          </span>
        </h3>
        <p className="text-sm text-slate-500 line-clamp-1">{lesson.description}</p>
      </div>
      
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {lesson.status !== "done" && (
          <Button variant="ghost" size="sm" onClick={() => handleStatus("done")} title="Marcar como concluída">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </Button>
        )}
        {lesson.status === "done" && (
          <Button variant="ghost" size="sm" onClick={() => handleStatus("ongoing")} title="Marcar como em andamento">
            <Clock className="w-4 h-4 text-orange-600" />
          </Button>
        )}
        
        <Link href={`/editLesson?id=${lesson.id}`}>
            <Button variant="ghost" size="sm" title="Editar lição">
            <Edit2 className="w-4 h-4 text-orange-600" />
            </Button>
        </Link>
        
        <Button variant="ghost" size="sm" onClick={handleDelete} className="text-red-600 hover:text-red-700 hover:bg-red-50" title="Excluir lição">
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
