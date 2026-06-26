"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export function DeleteRoadmapIcon({ roadmapId }: { roadmapId: number }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const t = useTranslations('Roadmaps');

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirm(t('deleteRoadmapSub'))) {
      return;
    }

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/roadmaps/${roadmapId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(t('errorDeletingRoadmap'));
      }

      toast.success(t('roadmapDeleted'));
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(t('errorDeletingRoadmap'));
      setIsDeleting(false);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-1.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
      title={t('deleteRoadmap')}
    >
      <Trash className="w-4 h-4" />
    </button>
  );
}
