import { useQuery } from "@tanstack/react-query";

const useCase = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["cases"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.montagemotion.com/api/v1/cases"
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

export default useCase;
