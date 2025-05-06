import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import React from 'react'

type Props = {}

const NotFoundPage = (props: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Heading />

            <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
                <div className="space-y-6 max-w-md mx-auto">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted mx-auto">
                        <AlertCircle className="h-10 w-10 text-muted-foreground" />
                    </div>

                    <h1 className="text-7xl font-bold tracking-tighter">404</h1>

                    <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>

                    <p className="text-muted-foreground">
                        Sorry, we couldn't find the page you're looking for. The page might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>

                    <div className="flex justify-center pt-4">
                        <Button asChild size="lg">
                            <a href="/">Return to Home</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NotFoundPage