import { UserButton } from '@clerk/nextjs';
export default function Home() {
	return (
		<>
			<p>Authenticated Route</p>
			<UserButton />
		</>
	);
}
