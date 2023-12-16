import { useMutation } from '@tanstack/react-query';

import { addPost } from '@homework-task/api/posts.api';
import { CreatePost, Post } from '@homework-task/types';

export const usePosts = () => {
    return {
        mutation: ({ onSuccess }: { onSuccess?: (data: Post) => void }) =>
            useMutation({
                mutationFn: (newPost: CreatePost) => addPost(newPost),
                onSuccess,
            }),
    };
};
