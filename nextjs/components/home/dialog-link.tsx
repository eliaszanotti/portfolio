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
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/home/button-link";
import { DialogContentInner } from "@/components/home/dialog-content-inner";
import type { NavLink } from "@/data/nav-links";

type DialogLinkProps = {
	link: NavLink;
};

export function DialogLink({ link }: DialogLinkProps) {
	return (
		<Dialog>
			<DialogTrigger render={<ButtonLink link={link} />} />
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Contact Me</DialogTitle>
					<DialogDescription>
						Feel free to reach out to me via email or phone.
					</DialogDescription>
				</DialogHeader>
				<DialogContentInner />
				<DialogFooter>
					<DialogClose render={<Button variant="outline">Close</Button>} />
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
