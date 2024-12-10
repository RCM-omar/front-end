import { useState, useCallback } from "react";
import { AxiosInstance } from "axios";
import { setGlobalLoading } from "../../Redux/slices/themeSlice";

export function useAxios(axiosInstance: AxiosInstance , globalLoading ?: boolean) {
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const request = useCallback(
    async (
      method: "get" | "post" | "put" | "delete",
      url: string,
      data?: any
    ) => {
      setLoading(true);
      setError(null);

      globalLoading && setGlobalLoading(true);
      try {
        const response = await axiosInstance.request({
          method,
          url,
          data,
        });
        return response.data;
      } catch (err: any) {
        setError(
          JSON.stringify(err) || "Something went wrong,, check useAxios file"
        );
        throw err;
      } finally {
        setGlobalLoading(false);
        setLoading(false);
      }
    },
    []
  );

  return { request, loading, error };
}
