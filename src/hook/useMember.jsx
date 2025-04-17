import { useQuery } from "@tanstack/react-query";

const useMember = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["work"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.montagemotion.com/api/v1/members"
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

export default useMember;
