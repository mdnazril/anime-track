import React, { useState } from 'react'
import { BookmarkPlus, Calendar, Clock, Heart, Play, Share2, Star, Tv2 } from 'lucide-react'
import { Button } from './ui/button'
import { formatDate } from '@/function/shared'
import { Badge } from './ui/badge'
import ReactPlayer from 'react-player'

type Props = {
    data: {
        trailer: {
            url: string
        },
        images: {
            jpg: {
                large_image_url: string
            },
            webp: {
                large_image_url: string
            }
        },
        genres: string[],
        title: string,
        type: string,
        episodes: number,
        score: number,
        scored_by: number,
        synopsis: string,
        aired: {
            from: string,
            to: string
        },
        status: string,
        duration: string
    }
}

const DetailsGroup = (props: Props) => {

    const { data } = props;

    const [isVideoStarted, setIsVideoStarted] = useState(false);

    return (
        <section className="relative">

            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />

            <div className="relative h-[300px] overflow-hidden md:h-[400px]">
                {!isVideoStarted && (
                    <img
                        src={data.images.webp.large_image_url}
                        alt="banner"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />
                )}

                <ReactPlayer
                    url={data.trailer.url}
                    playing={true}
                    muted={true}
                    loop={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    onStart={() => setIsVideoStarted(true)}
                    config={{
                        youtube: {
                            playerVars: {
                                modestbranding: 1,
                                showinfo: 0,
                                rel: 0,
                                autoplay: 1,
                                mute: 1,
                                controls: 0,
                            },
                        },
                    }}
                    className="absolute top-0 left-0 z-10"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 z-20" />
            </div>

            <div className="container relative -mt-32 px-4 md:px-6 z-50">
                <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
                    <div className="hidden md:block">
                        <div className="overflow-hidden rounded-lg border-4 border-background shadow-xl">
                            <img
                                src={data.images.webp.large_image_url}
                                alt="poster"
                                width={280}
                                height={420}
                                className="aspect-[2/3] h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center flex-wrap gap-2">
                            {data.genres.map((genre: any, index: number) => (
                                <Badge key={index} className="bg-primary/80 hover:bg-primary/90 text-white">{genre.name}</Badge>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4 md:hidden">
                            <img
                                src={data.images.webp.large_image_url}
                                alt="poster"
                                width={120}
                                height={180}
                                className="aspect-[2/3] h-full w-full rounded-md object-cover shadow-md"
                            />
                            <div className="space-y-2">
                                <h1 className="text-2xl text-white font-bold tracking-tight">{data.title}</h1>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-medium text-white">{data.score}</span>
                                    </div>
                                    <span className="text-sm text-white">Reviewed by {data.scored_by} persons</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{data.title}</h1>
                            <div className="mt-2 flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="text-lg font-medium text-white">{data.score}</span>
                                </div>
                                <span className="text-white ">Reviewed by {data.scored_by} persons</span>
                            </div>
                        </div>

                        <p >{data.synopsis} </p>

                        <div className="flex flex-wrap gap-2 md:">
                            <Button className="gap-2">
                                <Play className="h-4 w-4" /> Watch Now
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <BookmarkPlus className="h-4 w-4" /> Add to List
                            </Button>
                            <Button variant="outline" size="icon">
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Favorite</span>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share</span>
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Calendar className="h-4 w-4" /> Released
                                </div>
                                <p className="font-medium">{formatDate(data.aired.from)}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" /> Episodes
                                </div>
                                <p className="font-medium">{data.episodes}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4" /> Duration
                                </div>
                                <p className="font-medium">{data.duration}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Tv2 className="h-4 w-4" /> Status
                                </div>
                                <p className="font-medium">{data.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DetailsGroup
