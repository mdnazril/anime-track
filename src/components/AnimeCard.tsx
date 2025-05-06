import React from 'react'
import { Heart, Star } from 'lucide-react'
import { Button } from './ui/button'

type Props = {
    mal_id: string
    title: string
    type: string
    episodes: number
    score: number
    images: {
        jpg: {
            large_image_url: string
        }
    }
}

const AnimeCard = (props: Props) => {

    const { mal_id, title, type, episodes, images, score } = props;

    return (
        <a href={`/anime/${mal_id}`} className="group space-y-2">
            <div className="relative overflow-hidden rounded-lg bg-white/50">
                <img
                    src={images.jpg.large_image_url}
                    alt="Anime cover"
                    width={240}
                    height={360}
                    className="aspect-[2/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Star className="h-4 w-4 fill-white/40 text-white/40" />
                    <span className="text-xs font-medium text-white">{score}</span>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-2 h-7 w-7 rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-300 hover:bg-black/80 group-hover:opacity-100"
                >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to favorites</span>
                </Button>
            </div>
            <div className="space-y-1">
                <h3 className="font-medium leading-tight line-clamp-1 group-hover:text-primary">{title}</h3>
                <p className="text-xs text-muted-foreground">{type} • {episodes > 1 ? episodes + " Episodes" : episodes + " Episode"}</p>
            </div>
        </a>
    )
}

export default AnimeCard
