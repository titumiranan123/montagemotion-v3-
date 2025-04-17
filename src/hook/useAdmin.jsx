import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.montagemotion.com/api/v1/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return {
    data: data?.data,
    isLoading,
    isError,
    refetch,
  };
};

export default useAdmin;
