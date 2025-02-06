'use client';

import { useGetAccounts } from '@/features/accounts/api/use-get-accounts';

export default function Home() {
	const accountsQuery = useGetAccounts();

	if (accountsQuery.isLoading) {
		return <div>Loading...</div>;
	}

	if (accountsQuery.error) {
		return <div>Error: {accountsQuery.error.message}</div>;
	}

	return (
		<>
			<p>Authenticated Route</p>
		</>
	);
}
