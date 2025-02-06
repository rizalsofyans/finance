import { Header } from '@/components/header';

type DashboardLayoutProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<>
			<Header />
			<main className='max-w-screen-2xl mx-auto'>{children}</main>
		</>
	);
};

export default DashboardLayout;
