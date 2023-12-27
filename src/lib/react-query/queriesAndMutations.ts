import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
  } from "@tanstack/react-query";
  
//   import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
  import {
    createUserAccount,
    signInAccount,
    // getCurrentUser,
    // signOutAccount,
    // getUsers,
    // createPost,
    // getPostById,
    // updatePost,
    // getUserPosts,
    // deletePost,
    // likePost,
    // getUserById,
    // updateUser,
    // getRecentPosts,
    // getInfinitePosts,
    // searchPosts,
    // savePost,
    // deleteSavedPost,
  } from "@/lib/appwrite/api";
  import { INewPost, INewUser, IUpdatePost, IUpdateUser } from "@/types";

  // ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
    return useMutation({
      mutationFn: (user: INewUser) => createUserAccount(user),
    });
  };
  
  export const useSignInAccount = () => {
    return useMutation({
      mutationFn: (user: { email: string; password: string }) =>
        signInAccount(user),
    });
  };