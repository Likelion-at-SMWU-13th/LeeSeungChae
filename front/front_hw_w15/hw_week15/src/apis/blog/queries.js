import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { createUser, updateUser } from "@/apis/userApi";

// 1. 회원가입 (POST)
export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => createUser({ username, password }),
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};

// 2. 회원정보 수정 (PUT)
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, username }) => {
      if (!userId) throw new Error("userId가 없습니다!");
      return updateUser(userId, username);
    },
    onSuccess: () => {
      alert("정보 수정 완료!");
      queryClient.invalidateQueries({ queryKey: ["myPage"] });
    },
  });
};
