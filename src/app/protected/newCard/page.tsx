import { CreateItem } from "@/components/createItem/createItem"
import { Title } from "@/components/title/title"

const CreateNewItem = () => {
    return (
        <div className="md:max-w-[1009px]">
            <Title
                title="Adicionar Novo Item"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <div className="bg-white border rounded-lg px-2 py-8">
                <CreateItem />
            </div>
        </div>
    )
}

export default CreateNewItem