"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AddGroupDialog({
  roadmapId,
  children,
}: {
  roadmapId: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/roadmaps/${roadmapId}/groups`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) throw new Error("Erro ao criar grupo");

      toast.success("Grupo criado com sucesso!");
      setOpen(false);
      setName("");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível criar o grupo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md bg-white rounded-2xl p-6 md:p-8 border-none shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
            Novo Grupo
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreateGroup} className="mt-4 flex flex-col gap-4">
          <Input
            className="h-11 rounded-xl"
            placeholder="Nome do grupo (ex: Matemática, Módulo 1)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" type="button" className="h-11 px-6 rounded-xl font-medium" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button type="submit" className="h-11 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors" disabled={isLoading || !name.trim()}>
              {isLoading ? "Criando..." : "Salvar Grupo"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
