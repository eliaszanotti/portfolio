import { ButtonLink } from "@/components/home/button-link";
import { DialogLink } from "@/components/home/dialog-link";
import { navLinks } from "@/data/nav-links";

export function NavContainer() {
	return (
		<div className="relative w-full max-w-3xl h-100">
			{navLinks.map((item, index) => {
				if (item.isContactDialog) {
					return (
						<DialogLink key={item.title}>
							<ButtonLink link={item} index={index} />
						</DialogLink>
					);
				}
				return <ButtonLink key={item.title} link={item} index={index} />;
			})}
		</div>
	);
}
