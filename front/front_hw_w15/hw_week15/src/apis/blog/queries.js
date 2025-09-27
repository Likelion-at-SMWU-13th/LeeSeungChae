import { useMutation } from "@tanstack/react-query";
import { createUser } from "@/apis/userApi";

// 1. 회원가입 (POST)
export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => createUser({ username, password }),
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};
