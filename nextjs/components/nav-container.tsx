import { navLinks } from "@/data/nav-links";
import { ButtonLink } from "@/components/button-link";
import { DialogLink } from "@/components/dialog-link";

export function NavContainer() {
	return (
		<div className="relative w-full max-w-3xl h-100">
			{navLinks.map((item) => {
				if (item.isContactDialog) {
					return <DialogLink key={item.title} link={item} />;
				}
				return <ButtonLink key={item.href} link={item} />;
			})}
		</div>
	);
}
