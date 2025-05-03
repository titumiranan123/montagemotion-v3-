"use client";
import useHomeApi from "./useHomeApi";
export const useHomeDataSlice = <K extends keyof any>(key: K) => {
  const { data, ...query } = useHomeApi();
  return {
    data: data?.[key],
    ...query,
  };
};
