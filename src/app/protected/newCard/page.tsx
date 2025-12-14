import { CreateItem } from "@/ui/createItem/createItem"
import { Title } from "@/components/title/title"

const CreateNewItem = () => {
    return (
        <div className="w-5xl">
            <Title
                title="Adicionar Novo Item"
                style="text-2xl font-bold text-neutral-800 pb-5"
            />
            <CreateItem />
        </div>
    )
}

export default CreateNewItem