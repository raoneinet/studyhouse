export const Tags = ({tags}: {tags: string}) => {
    return (
        <>
            {tags.split(",").map((tag, index) => (
                <div
                    key={index}
                    className="px-2 py-1 bg-slate-100 text-slate-600 text-xs md:text-sm rounded-md"
                >
                    {tag}
                </div>
            ))}
        </>
    )
}