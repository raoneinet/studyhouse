import { MiniCards } from "./miniCards"

export const Ongoing = ()=>{
    return (
        <div className="flex flex-row md:grid lg:grid-cols-4 md:grid-cols-2 lg:overflow-x-hidden overflow-x-scroll gap-5">
            <MiniCards/>
            <MiniCards/>
            <MiniCards/>
            <MiniCards/>
        </div>
    )
}