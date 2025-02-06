import { SignUp, ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const RegisterPage = () => {
	return (
		<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
			<div className='h-full lg:flex flex-col items-center justfiy-center px-4'>
				<div className='text-center space-y-4 pt-16'>
					<h1 className='font-bold text-3xl text-gray-900'>
						Create an account
					</h1>
					<p className='text-gray-600'>Sign up to get started</p>
				</div>
				<div className='items-center justify-center my-10'>
					<ClerkLoaded>
						<SignUp />
					</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className='animate-spin text-muted-foreground' />
					</ClerkLoading>
				</div>
			</div>
			<div className='h-full bg-blue-600 hidden lg:flex items-center justify-center'>
				<Image src='/logo.svg' alt='logo' width={100} height={100} />
			</div>
		</div>
	);
};

export default RegisterPage;
