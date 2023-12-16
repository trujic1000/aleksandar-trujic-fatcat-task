import { useUsers } from '@homework-task/hooks';

export const ListUsers = () => {
    const { data: users, isLoading, isError } = useUsers();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError || !users) {
        return <p>Error fetching data</p>;
    }

    return (
        <div>
            <h2 className="mb-2 text-lg font-semibold text-black">Users:</h2>
            <div className="divide-y divide-gray-200">
                {users.map((user) => (
                    <ul
                        key={user.id}
                        className="max-w-md text-black list-none py-2"
                    >
                        <li>
                            <strong>ID:</strong> {user.id}
                        </li>
                        <li>
                            <strong>Name:</strong> {user.name}
                        </li>
                        <li>
                            <strong>Email:</strong> {user.email}
                        </li>
                        <li>
                            <strong>Phone:</strong> {user.phone}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};
