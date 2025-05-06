import React, { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'

type Props = {}

const AnimeCardSkeleton = (props: Props) => {
    return (
        <div className='w-full h-full'>
            <Skeleton className="aspect-[2/3] bg-primary/30" />
            <div className='flex flex-col gap-2 pt-2'>
                <Skeleton className="h-5 w-1/2 bg-primary/30" />
                <Skeleton className="h-5 w-1/3 bg-primary/30" />
            </div>
        </div>
    )
}

export default AnimeCardSkeleton
