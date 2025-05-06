import { SearchX } from 'lucide-react'
import React from 'react'

type Props = {
    query: string
}

const NoData = (props: Props) => {

    const { query } = props

    return (
        <div className='container mx-auto'>
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center mx-auto">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <SearchX className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">No results for {query}</h3>
                <p className="mt-2 max-w-md text-muted-foreground">We couldn’t find any anime matching your search. Try different keywords.</p>
            </div>
        </div>
    )
}

export default NoData
