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
import { getFormSchema } from "@/utils/formSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

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
  const t = useTranslations('Roadmaps');

  const handleCreateItem = async (values: z.infer<ReturnType<typeof getFormSchema>>) => {
    const created_at = new Date().toISOString().slice(0, 19).replace("T", " ");
    const payload = { ...values, created_at, roadmapId, roadmapGroupId: groupId };

    try {
      await createLesson(payload).unwrap();

      toast.success(t('lessonAdded'), {
        description: values.title,
      });

      setOpen(false); 
      router.refresh(); 
    } catch (error: any) {
      console.error("Erro ao criar assunto. ", error);
      toast.error(t('errorAddingLesson'));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-xl">{t('addLessonToRoadmap')}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 p-4 bg-white border rounded-2xl shadow-sm">
          <LessonForm submitData={handleCreateItem} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
