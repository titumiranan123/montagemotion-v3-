import { useQuery } from '@tanstack/react-query';
import { api_url } from './Apiurl';
const useBlogSingle = (slug:string) => {
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:["blog",slug],
        queryFn:async ()=>{
        const res = await api_url.get(`/api/website/blog/${slug}`)
        return res.data.data
        }
    })
    return {data,isLoading,isError,refetch}
};

export default useBlogSingle;