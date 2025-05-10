'use client'
import { useQuery } from '@tanstack/react-query';
import { api_url } from './Apiurl';
const useHomeApi = (type:string) => {
    const {data,isLoading,isError} = useQuery({
        queryKey:["headers"],
        queryFn:async ()=>{
        const res = await api_url.get(`/api/website/data?type=${type}`)
        return res.data.data
        }
    })
    return {data,isLoading,isError}
};

export default useHomeApi;