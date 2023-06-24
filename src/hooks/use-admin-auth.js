import authApi from "@/api-client/auth-api";
import axiosClient from "@/api-client/axios-client";
import useSWR from "swr";
import { saveTokenToLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/router";

const fetcher = (url) => axiosClient.get(url);

export function useAdminAuth(options) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/user/profile", fetcher, {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    ...options,
  });
  const router = useRouter();

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload) {
    const response = await authApi.login(payload);
        if (response.status == 200) {
        const admin_token = response.data.data.access_token;
        saveTokenToLocalStorage('admin_token', admin_token)
        await mutate();
      }    
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    login,
    logout,
    profile,
    error,
    firstLoading,
  };
}
