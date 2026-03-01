"use client"
import { ExternalLink } from "lucide-react"
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
    const [error, setError] = useState(false)

    console.log("Links: ", links)

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_LINK_API
        const endpoint = `https://opengraph.io/api/1.1/site/${encodeURIComponent(links)}?app_id=${apiKey}`;

        async function fetchPreview() {
            try {
                const req = await fetch(endpoint);
                const preview = await req.json();

                if (req.status != 200) {
                    setError(true)
                    return
                }

                console.log("Preview: ", req)
                setPreview(preview.hybridGraph)
            } catch (error: any) {
                console.log("Erro ao mostrar preview: ", error)
            }
        }

        fetchPreview()
    }, [])

    return (
        <>
            {!error &&
                <div className="flex gap-2">
                    <div className="w-10">
                        <img src={preview?.image} alt="Link preview of website" className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                        <div className="font-bold text-xs">{preview?.title}</div>
                        <div className="text-xs line-clamp-2">{preview?.description}</div>
                    </div>
                </div>
            }
            {error &&
                <a href={links} target="_blank" className="flex gap-2 items-center">
                    <ExternalLink className="w-4" />
                    {links}
                </a>
            }
        </>
    )
}