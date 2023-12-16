import { User } from '@homework-task/types/User';
import { request } from '@homework-task/utils';

export async function fetchUsers() {
    const users = await request<User[]>('/users');
    return users;
}
