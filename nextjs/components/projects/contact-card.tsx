import { getTranslations } from "next-intl/server";
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

export async function ContactCard() {
	const t = await getTranslations("projects.contactCard");

	return (
		<Card className="bg-primary/10 ring-primary/30">
			<CardHeader>
				<CardTitle>{t("title")}</CardTitle>
				<CardDescription>{t("description")}</CardDescription>
			</CardHeader>
			<CardContent className="flex h-full items-end" />
			<CardFooter className="flex justify-end bg-primary/10 border-primary/10">
				<DialogLink>
					<Button nativeButton={true}>{t("button")}</Button>
				</DialogLink>
			</CardFooter>
		</Card>
	);
}
