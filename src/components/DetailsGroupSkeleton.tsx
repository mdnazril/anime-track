import React from 'react'
import { BookmarkPlus, Calendar, Clock, Heart, Play, Share2, Star, Tv2 } from 'lucide-react'
import { Button } from './ui/button'
import { formatDate } from '@/function/shared'
import { Badge } from './ui/badge'
import ReactPlayer from 'react-player'
import { Skeleton } from './ui/skeleton'

type Props = {

}

const DetailsGroupSkeleton = (props: Props) => {

    return (
        <section className="relative">

            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />

            <Skeleton className="relative h-[300px] overflow-hidden md:h-[400px]" />

            <div className="container relative -mt-32 px-4 md:px-6 z-50">
                <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
                    <div className="hidden md:block">
                        <Skeleton
                            className="aspect-[2/3] h-full w-full object-cover"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            {Array(5).map((genre: any, index: number) => (
                                <Badge key={index} className="bg-primary/80 hover:bg-primary/90 text-white">{genre.name}</Badge>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 md:hidden">
                            <Skeleton
                                className="aspect-[2/3] h-full w-full rounded-md object-cover shadow-md"
                            />
                            <Skeleton className="space-y-2" />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Skeleton className='w-10 h-6' />
                            <Skeleton className='w-10 h-6' />
                            <Skeleton className='w-10 h-6' />
                            <Skeleton className='w-10 h-6' />
                        </div>

                        <Skeleton className='h-5 w-1/2' />

                        <Skeleton className='h-5 w-1/2' />

                        <Skeleton className='h-1/2 w-full mt-10' />

                        <div className="flex flex-wrap gap-2">
                            <Skeleton className='w-25 h-6' />
                            <Skeleton className='w-25 h-6' />
                            <Skeleton className='w-6 h-6' />
                            <Skeleton className='w-6 h-6' />
                        </div>

                        <div className="flex flex-wrap justify-between">
                            <Skeleton className='w-1/5 h-10' />
                            <Skeleton className='w-1/5 h-10' />
                            <Skeleton className='w-1/5 h-10' />
                            <Skeleton className='w-1/5 h-10' />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default DetailsGroupSkeleton
