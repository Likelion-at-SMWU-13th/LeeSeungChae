import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { createUser, updateUser, readUser, deleteUser } from "@/apis/userApi";

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

// 3. 마이페이지 조회 (GET)
export const useReadUser = (userId) => {
  return useQuery({
    queryKey: ["myPage", userId],
    queryFn: () => readUser(userId),
    enabled: !!userId,
    staleTime: 30 * 1000, // 30초 동안 신선한 상태 유지
    gcTime: 10 * 60 * 1000, // 캐시 10분 동안 보관
    retry: 3, // 최대 3번까지 재시도
  });
};

// 4. 회원 정보 삭제 (DELETE)
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId) => {
      if (!userId) throw new Error("userId가 없습니다!");
      return deleteUser(userId);
    },
    onSuccess: () => {
      alert("회원 정보 성공적으로 삭제 완료!");
      queryClient.invalidateQueries();
    },
  });
};
