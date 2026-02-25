import { getTranslations } from "next-intl/server";
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

export async function DialogLink({ children }: DialogLinkProps) {
	const t = await getTranslations("dialog");

	return (
		<Dialog>
			<DialogTrigger className="hover:cursor-pointer" render={children} />
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{t("title")}</DialogTitle>
					<DialogDescription>{t("description")}</DialogDescription>
				</DialogHeader>
				<DialogContentInner />
				<DialogFooter>
					<DialogClose
						render={
							<Button variant="outline" nativeButton={true}>
								{t("close")}
							</Button>
						}
					/>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
