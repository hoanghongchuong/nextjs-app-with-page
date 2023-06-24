import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr"

const fetcher = (url) => axiosClient.get(url);
export const useAuth = () => {
    const router = useRouter();
    
    //loading
    const [isLoading, setIsLoading] = useState(true);

    //user
    const {data:user, error, mutate} = useSWR("/user/profile", fetcher);
    //csrf
    
    //login

    //logout



  return {
    user,
    csrf,
    isLoading,
    login,
    logout,
  };
};
