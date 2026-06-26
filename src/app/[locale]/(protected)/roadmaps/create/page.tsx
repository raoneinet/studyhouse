import { RoadmapForm } from "@/components/roadmaps/RoadmapForm";

import { getTranslations } from 'next-intl/server';

export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations({ locale, namespace: 'Pages' });
    return {
        title: t('createRoadmapMeta')
    };
}

export default function CreateRoadmapPage() {
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <RoadmapForm />
        </div>
    );
}
