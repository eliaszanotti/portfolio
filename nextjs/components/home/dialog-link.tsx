import { DialogContentInner } from "@/components/home/dialog-content-inner";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type DialogLinkProps = {
	children: React.ReactElement;
};

export function DialogLink({ children }: DialogLinkProps) {
	return (
		<Dialog>
			<DialogTrigger className="hover:cursor-pointer" render={children} />
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Contact Me</DialogTitle>
					<DialogDescription>
						Feel free to reach out to me via email or phone.
					</DialogDescription>
				</DialogHeader>
				<DialogContentInner />
				<DialogFooter>
					<DialogClose
						render={
							<Button variant="outline" nativeButton={true}>
								Close
							</Button>
						}
					/>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
