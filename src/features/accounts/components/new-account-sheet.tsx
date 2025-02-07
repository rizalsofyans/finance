import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { AccountForm } from './account-form';

export function NewAccountSheet() {
	const { isOpen, onClose } = useNewAccount();

	const onSubmit = (values: FormValues) => {
		console.log({ values });
	};

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className='space-y-4'>
				<SheetHeader>
					<SheetTitle>New Account</SheetTitle>
					<SheetDescription>
						Create a new account to track your transactions.
					</SheetDescription>
				</SheetHeader>
				<AccountForm onSubmit={() => {}} onDelete={() => {}} disabled={false} />
			</SheetContent>
		</Sheet>
	);
}
