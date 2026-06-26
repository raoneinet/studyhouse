import { FolderOpen, Plus } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    actionLink?: string;
    icon?: React.ReactNode;
}

export const EmptyState = ({
    title,
    description,
    actionLabel,
    actionLink = "/newLesson",
    icon
}: EmptyStateProps) => {
    const t = useTranslations('EmptyState');
    
    const displayTitle = title || t('defaultTitle');
    const displayDesc = description || t('defaultDesc');
    const displayActionLabel = actionLabel || t('defaultAction');
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200 text-center w-full">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                {icon || <FolderOpen className="w-10 h-10 text-orange-500" />}
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{displayTitle}</h2>
            <p className="text-slate-500 max-w-md mb-8">
                {displayDesc}
            </p>
            {actionLink && displayActionLabel && (
                <Link 
                    href={actionLink}
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-sm"
                >
                    <Plus size={20} />
                    {displayActionLabel}
                </Link>
            )}
        </div>
    )
}