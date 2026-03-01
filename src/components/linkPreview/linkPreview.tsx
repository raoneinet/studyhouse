"use client"
import { useEffect, useState } from "react"

type Props = {
    links: string
}

type Preview = {
    image: string
    title: string
    description: string
    site_name: string
}

export const LinkPreview = ({ links }: Props) => {
    const [preview, setPreview] = useState<Preview>()

    console.log("Links: ", links)

    useEffect(() => {
        const apiKey = process.env.LINK_PREVIEW_API
        const endpoint = `https://opengraph.io/api/1.1/site/${encodeURIComponent(links)}?app_id=${apiKey}`;

        async function fetchPreview() {
            try {
                const req = await fetch(endpoint);
                const preview = await req.json();

                console.log("Preview: ", preview.hybridGraph)
                setPreview(preview.hybridGraph)
            } catch (error: any) {
                console.log("Erro ao mostrar preview: ", error)
            }
        }

        fetchPreview()
    }, [])

    return (
        <div className="flex gap-2">
            <div className="w-10">
                <img src={preview?.image} alt="Link preview of website" className="w-10 h-10"/>
            </div>
            <div className="flex-1">
                <div className="font-bold text-xs">{preview?.title}</div>
                <div className="text-xs line-clamp-2">{preview?.description}</div>
            </div>
        </div>
    )
}