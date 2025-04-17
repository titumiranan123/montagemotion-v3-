import { useQuery } from "@tanstack/react-query";

const useIntro = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["intro"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.montagemotion.com/api/v1/intros"
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

export default useIntro;
