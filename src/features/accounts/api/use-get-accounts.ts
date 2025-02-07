import { useQuery } from '@tanstack/react-query';
import { client as honoClient } from '@/lib/hono';

interface ApiResponse<T> extends Response {
	json: () => Promise<{ data: T }>;
}

interface Client {
	api: {
		accounts: {
			$get: () => Promise<ApiResponse<AccountData>>;
		};
	};
}

interface AccountData {
	id: number;
	name: string;
}

const client = honoClient as Client;

export const useGetAccounts = () => {
	const query = useQuery({
		queryKey: ['accounts'],
		queryFn: async () => {
			const response = await client.api.accounts.$get();

			if (!response.ok) {
				throw new Error('Failed to fetch accounts');
			}

			const { data } = await response.json();

			return data;
		},
	});

	return query;
};
