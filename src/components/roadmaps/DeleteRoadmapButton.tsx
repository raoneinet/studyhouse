"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function DeleteRoadmapButton({ roadmapId }: { roadmapId: number }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
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
      router.push("/roadmaps");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir roadmap");
      setIsDeleting(false);
    }
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleDelete} 
      disabled={isDeleting}
      className="gap-2 text-red-500 hover:text-red-700 hover:bg-red-50"
      title="Excluir Roadmap"
    >
      <Trash className="w-4 h-4" />
      {isDeleting ? "Excluindo..." : "Excluir"}
    </Button>
  );
}
