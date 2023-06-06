import authApi from "@/api-client/auth-api";
import axiosClient from "@/api-client/axios-client";
import useSWR from "swr";


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
    ...options
  });

  console.log({ profile, error });

  async function login(payload) {
    await authApi.login(payload);
    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    login, logout, profile, error
  }
}
