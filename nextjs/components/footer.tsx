import { getTranslations } from "next-intl/server";

export default async function Footer() {
	const t = await getTranslations("footer");
	const year = new Date().getFullYear();

	return (
		<footer className="py-6 text-center text-sm text-muted-foreground">
			<p>{t("copyright", { year })}</p>
		</footer>
	);
}
