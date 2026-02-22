import { DialogLink } from "@/components/home/dialog-link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function ContactCard() {
	return (
		<Card className="bg-primary/10 ring-primary/30">
			<CardHeader>
				<CardTitle>Your next project</CardTitle>
				<CardDescription>
					Have a project in mind? Let&apos;s discuss it together!
				</CardDescription>
			</CardHeader>
			<CardContent className="flex h-full items-end" />
			<CardFooter className="flex justify-end bg-primary/10 border-primary/10">
				<DialogLink>
					<Button>Contact Me!</Button>
				</DialogLink>
			</CardFooter>
		</Card>
	);
}
