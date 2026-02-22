import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { DialogLink } from "@/components/home/dialog-link";
import { Button } from "@/components/ui/button";

export function ContactCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Your next project</CardTitle>
				<CardDescription>
					Have a project in mind? Let&apos;s discuss it together!
				</CardDescription>
			</CardHeader>
			<CardContent className="flex h-full items-end" />
			<CardFooter className="flex justify-end">
				<DialogLink>
					<Button>Contact Me!</Button>
				</DialogLink>
			</CardFooter>
		</Card>
	);
}
