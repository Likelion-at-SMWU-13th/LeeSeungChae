import createPost from "./axios";
import { useMutation } from "@tanstack/react-query";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost({ title, content }),
  });
};

export const useGetPosts = (postId) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPosts(postId),

    enabled: !!postId,
    staleTime: 10 * 1000,
    gcTime: 60 * 1000,
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: async ({ postId, title, content }) => {
      if (!postId) throw new Error("postId가 없습니다.");
      return updatePost(postId, { title, content });
    },
  });
};

export const useDeletePost = () => {
  return useMutation({
    mutationFn: (postId) => {
      if (!postId) throw new Error("postId가 없습니다.");
      return deletePost(postId);
    },
  });
};
