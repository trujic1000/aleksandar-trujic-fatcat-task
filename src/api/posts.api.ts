import { CreatePost, Post } from '@homework-task/types';
import { request } from '@homework-task/utils';

export async function addPost(newPost: CreatePost) {
    const posts = await request<Post>('/posts', {
        method: 'POST',
        body: JSON.stringify({ ...newPost, userId: 1 }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return posts;
}
