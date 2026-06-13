"use client"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const SearchBar = () => {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
                type="text"
                placeholder="buscar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-white w-full pl-10 py-2 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500" 
            />
        </form>
    )
}