import { getAnimeById } from '@/api/api';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import Heading from '@/components/Heading';
import DetailsGroup from '@/components/DetailsGroup';
import DetailsGroupSkeleton from '@/components/DetailsGroupSkeleton';
import SomethingWrong from '@/components/SomethingWrong';

type Props = {

}

const Details = (props: Props) => {

    const [data, setData] = useState<any>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchTopAnime = async () => {
            try {
                const data = await getAnimeById(id || '');
                setData(data.data || undefined);
            } catch (error) {
                console.error('Error fetching top anime:', error);
                setData(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchTopAnime();
    }, []);

    return (
        <div>

            <Heading />

            <div className='container mx-auto'>

                {data && !loading && <DetailsGroup data={data} />}

                {!data && loading && <DetailsGroupSkeleton />}

                {!data && !loading && <SomethingWrong />}

            </div>

        </div>
    )
}

export default Details