import { getTopAnime, searchAnime } from '@/api/api';
import AnimeCard from '@/components/AnimeCard';
import AnimeCardSkeleton from '@/components/AnimeCardSkeleton';
import Heading from '@/components/Heading';
import SomethingWrong from '@/components/SomethingWrong';
import React, { useEffect, useState } from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import NoData from '@/components/NoData';

type Props = {};

const Home = (props: Props) => {
    const [data, setData] = useState<any>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setData(undefined);
            try {
                const response = query
                    ? await searchAnime(query)
                    : await getTopAnime(page);

                setData(response || undefined);
            } catch (error) {
                setData(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, query]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleSearch = (newQuery: string) => {
        setQuery(newQuery);
        setPage(1);
    };

    const totalPages = data?.pagination?.last_visible_page || 0;

    return (
        <div>
            <Heading handleSearch={handleSearch} />
            <div className='container mx-auto p-2'>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {!loading && data?.data?.map((item: any, index: number) => (
                        <AnimeCard key={index} {...item} />
                    ))}

                    {loading && [...Array(10)].map((_, index) => (
                        <AnimeCardSkeleton key={index} />
                    ))}
                </div>

                {!loading && !data && <SomethingWrong />}

                {!loading && data?.data?.length === 0 && <NoData query={query} />}

                {data?.data?.length !== 0 &&
                    <Pagination className='pt-4'>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (page > 1) handlePageChange(page - 1);
                                    }}
                                />
                            </PaginationItem>

                            {[...Array(totalPages)].map((_, i) => {
                                const pageNumber = i + 1;
                                if (i > 2 && i < totalPages - 2 && pageNumber !== page) {
                                    if (i === 3) {
                                        return (
                                            <PaginationItem key="ellipsis">
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        );
                                    }
                                    return null;
                                }
                                return (
                                    <PaginationItem key={pageNumber}>
                                        <PaginationLink
                                            href="#"
                                            isActive={page === pageNumber}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(pageNumber);
                                            }}
                                        >
                                            {pageNumber}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (page < totalPages) handlePageChange(page + 1);
                                    }}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                }

            </div>
        </div>
    );
};

export default Home;
