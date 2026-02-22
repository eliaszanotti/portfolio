import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SubSection } from "@/components/layout/sub-section";
import { SectionTitle } from "@/components/section-title";
import { SectionDescription } from "@/components/section-description";
import { Button } from "@/components/ui/button";
import { Mail, Github, Instagram, Linkedin } from "lucide-react";

const contactChannels = [
    {
        name: "Email",
        value: "elias.zanotti@example.com",
        icon: Mail,
        href: "mailto:elias.zanotti@example.com",
        color: "text-red-500",
    },
    {
        name: "GitHub",
        value: "@eliaszanotti",
        icon: Github,
        href: "https://github.com/eliaszanotti",
        color: "text-gray-900 dark:text-white",
    },
    {
        name: "Instagram",
        value: "@eliaszanottiweb",
        icon: Instagram,
        href: "https://www.instagram.com/eliaszanottiweb",
        color: "text-pink-500",
    },
    {
        name: "LinkedIn",
        value: "Elias Zanotti",
        icon: Linkedin,
        href: "https://linkedin.com/in/eliaszanotti",
        color: "text-blue-600",
    },
];

export function ContactSection() {
    return (
        <Section id="contact">
            <SubSection className="space-y-8 px-8 max-w-2xl mx-auto text-center">
                <SectionTitle>Get in Touch</SectionTitle>
                <SectionDescription>Feel free to reach out through any of these channels</SectionDescription>
            </SubSection>

            <SubSection className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 max-w-2xl mx-auto w-full">
                {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                        <Button
                            key={channel.name}
                            variant="outline"
                            className="h-auto flex-col gap-3 py-6 px-8 hover:bg-primary hover:text-primary-foreground transition-all"
                            render={
                                <Link href={channel.href} target="_blank" rel="noopener noreferrer" />
                            }
                        >
                                <Icon className={`size-8 ${channel.color}`} />
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-semibold">{channel.name}</span>
                                    <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                                        {channel.value}
                                    </span>
                                </div>
                            </Button>
                    );
                })}
            </SubSection>
        </Section>
    );
}
