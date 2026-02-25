import { Button } from "@/components/ui/button";
import type { NavLink } from "@/data/nav-links";
import { iconMap } from "@/lib/icons";

export type ButtonLinkProps = {
	link: NavLink;
	index?: number;
};

export function getButtonProps(link: NavLink, index: number) {
	return {
		variant: link.buttonVariant ?? "outline",
		className: `${link.buttonSize} scale-90 -translate-x-1/20  md:scale-100 md:translate-x-0 flex flex-col items-center justify-center gap-2 rounded-full absolute hover:cursor-pointer transition-transform`,
		style: {
			top: link.position.top,
			left: link.position.left,
			animation: `float ${4 + index * 0.5}s ease-in-out infinite`,
		},
	};
}

export function ButtonContent({ link }: { link: NavLink }) {
	const Icon = iconMap[link.icon];
	return (
		<>
			<Icon className="size-6" />
			<span className="font-semibold text-sm">{link.title}</span>
		</>
	);
}

export function ButtonLink({ link, index = 0 }: ButtonLinkProps) {
	const buttonProps = getButtonProps(link, index);

	return (
		<Button {...buttonProps} nativeButton={true}>
			<ButtonContent link={link} />
		</Button>
	);
}
