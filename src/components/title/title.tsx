
type Props = {
    title: string
    style: string
}

export const Title = ({title, style}: Props)=>{
    return (
        <div className={style}>
            <h2>{title}</h2>
        </div>
    )
}