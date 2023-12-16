import { useQuery } from '@tanstack/react-query';

import { fetchUsers } from '@homework-task/api/users.api';

export const useUsers = () => {
    return useQuery({ queryKey: ['users'], queryFn: fetchUsers });
};
