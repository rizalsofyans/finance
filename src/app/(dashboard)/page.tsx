'use client';

import { Button } from '@/components/ui/button';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';

export default function Home() {
	const { onOpen } = useNewAccount();

	return (
		<>
			<p>Authenticated Route</p>
			<Button onClick={onOpen}>Open Sheet</Button>
		</>
	);
}
