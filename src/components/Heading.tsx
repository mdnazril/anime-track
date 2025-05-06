import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

type Props = {
    handleSearch?: (query: string) => void
}

const Heading = (props: Props) => {

    const { handleSearch } = props;

    const [query, setQuery] = useState("")

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (query.trim() !== "") {
                handleSearch?.(query)
            }
        }, 500)

        return () => clearTimeout(debounce)
    }, [query, handleSearch])

    return (
        <header className="sticky top-0 z-100 border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-4">
                    <a href="/" className="flex items-center gap-2">
                        <span className="hidden sm:block text-lg font-bold">AnimeTrack</span>
                        <span className="block sm:hidden text-lg font-bold">AT</span>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    {handleSearch &&
                        <form className="relative flex w-full max-w-sm items-center" onSubmit={(e) => e.preventDefault()}>
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search anime..."
                                className="pl-8 rounded-lg"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </form>
                    }
                </div>
            </div>
        </header>
    )
}

export default Heading
