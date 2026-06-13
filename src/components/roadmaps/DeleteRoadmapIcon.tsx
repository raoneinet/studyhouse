"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteRoadmapIcon({ roadmapId }: { roadmapId: number }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm("Tem certeza que deseja excluir este roadmap? Todas as lições e grupos associados a ele também serão excluídos permanentemente!")) {
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/roadmaps/${roadmapId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Falha ao excluir roadmap");
      }

      toast.success("Roadmap excluído com sucesso");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir roadmap");
      setIsDeleting(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
      title="Excluir Roadmap"
    >
      <Trash className="w-4 h-4" />
    </button>
  );
}
