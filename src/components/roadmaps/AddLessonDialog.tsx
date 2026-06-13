"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LessonForm } from "@/components/lessonForm/lessonForm";
import { useCreateLessonMutation } from "@/app/reducer/lessonsApi";
import { toast } from "sonner";
import { formSchema } from "@/utils/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";

export function AddLessonDialog({
  roadmapId,
  groupId,
  children,
}: {
  roadmapId: number;
  groupId?: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [createLesson] = useCreateLessonMutation();
  const router = useRouter();

  const handleCreateItem = async (values: z.infer<typeof formSchema>) => {
    const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");
    const payload = { ...values, created_at, roadmapId, roadmapGroupId: groupId };

    try {
      await createLesson(payload).unwrap();

      toast.success("Lição adicionada com sucesso!", {
        description: values.title,
      });

      setOpen(false); 
      router.refresh(); 
    } catch (error: any) {
      console.error("Erro ao criar assunto. ", error);
      toast.error("Erro ao adicionar a lição");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-xl">Adicionar Nova Lição ao Roadmap</DialogTitle>
        </DialogHeader>
        <div className="mt-4 p-4 bg-white border rounded-2xl shadow-sm">
          <LessonForm submitData={handleCreateItem} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
