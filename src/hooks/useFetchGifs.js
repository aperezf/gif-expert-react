import { useEffect, useState } from 'react'
import { getGifs } from '../api/gif.api';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getGifs(category).then(data => {
            setIsLoading(false);
            setImages(data);
        });
    }, [category])
    return {
        images,
        isLoading
    }
}
