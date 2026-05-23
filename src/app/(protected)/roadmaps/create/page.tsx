import { RoadmapForm } from "@/components/roadmaps/RoadmapForm";

export const metadata = {
    title: "Criar Roadmap - StudyHouse",
    description: "Crie um novo roadmap de estudo para alcançar sua meta.",
};

export default function CreateRoadmapPage() {
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <RoadmapForm />
        </div>
    );
}
