import { ButtonLinkClient } from "@/components/home/button-link-client";
import { DialogLink } from "@/components/home/dialog-link";
import { getCachedNavLinks } from "@/data/get-nav-links";
import { ButtonLink } from "./button-link";

export async function NavContainer() {
	const navLinks = await getCachedNavLinks();

	return (
		<div className="relative w-full max-w-3xl h-100">
			{navLinks.map((item, index) => {
				if (item.isContactDialog) {
					return (
						<DialogLink key={item.id}>
							<ButtonLink link={item} index={index} />
						</DialogLink>
					);
				}
				return <ButtonLinkClient key={item.id} link={item} index={index} />;
			})}
		</div>
	);
}
