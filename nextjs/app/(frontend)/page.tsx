import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Mail, Code, FolderOpen, GraduationCap, User } from "lucide-react";

const navItems = [
    {
        title: "Contact",
        href: "/contact",
        icon: Mail,
        description: "Get in touch with me",
        size: "col-span-2 row-span-2",
    },
    {
        title: "Skills",
        href: "/skills",
        icon: Code,
        description: "My tech stack",
        size: "col-span-2 row-span-1",
    },
    {
        title: "Projects",
        href: "/projects",
        icon: FolderOpen,
        description: "My work",
        size: "col-span-1 row-span-2",
    },
    {
        title: "School",
        href: "/school",
        icon: GraduationCap,
        description: "My education",
        size: "col-span-1 row-span-1",
    },
    {
        title: "About",
        href: "/about",
        icon: User,
        description: "More about me",
        size: "col-span-2 row-span-1",
    },
];

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-16 px-8">
            {/* Hero Section */}
            <section className="flex flex-col items-center gap-6 text-center">
                <h1 className="text-6xl font-bold tracking-tight">
                    Elias <span className="text-primary">Zanotti</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                    Passionate full-stack developer crafting modern web experiences
                </p>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
                        Full-stack Developer
                    </span>
                </div>
            </section>

            {/* Navigation Grid */}
            <nav className="grid grid-cols-3 grid-rows-2 gap-4 w-full max-w-3xl">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link key={item.href} href={item.href} className={item.size}>
                            <Button
                                variant="outline"
                                className="h-full w-full flex flex-col items-center justify-center gap-2 py-8 text-base hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <Icon className="size-8" />
                                <span className="font-semibold">{item.title}</span>
                            </Button>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
