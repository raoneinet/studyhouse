"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export function DeleteRoadmapButton({ roadmapId }: { roadmapId: number }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const t = useTranslations('Roadmaps');

  const handleDelete = async () => {
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
      router.push("/roadmaps");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(t('errorDeletingRoadmap'));
      setIsDeleting(false);
    }
  };

  return (
    <Button 
      variant="ghost" 
      onClick={handleDelete} 
      disabled={isDeleting}
      className="gap-2 text-red-500 hover:text-red-700 hover:bg-red-50"
      title={t('deleteRoadmap')}
    >
      <Trash className="w-4 h-4" />
      {isDeleting ? t('deleting') : t('delete')}
    </Button>
  );
}
