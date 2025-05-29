import { useQuery } from '@tanstack/react-query';
import { api_url } from './Apiurl';
const useAboutpage = () => {
    const {data,isLoading,isError,refetch} = useQuery({
        queryKey:["aboutdata"],
        queryFn:async ()=>{
        const res = await api_url.get('/api/website/about')
        return res.data.data
        }
    })
    return {data,isLoading,isError,refetch}
};

export default useAboutpage;