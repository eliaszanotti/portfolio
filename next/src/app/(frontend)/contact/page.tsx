import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import Link from "next/link";

export default async function Contact() {
	const payload = await getPayload({ config: payloadConfig });
	const contact = await payload.findGlobal({ slug: "contact" });

	return (
		<section className="h-screen grid place-items-center">
			<div className="flex flex-col gap-8 bg-base-200 p-16 rounded-field max-w-prose">
				<div className="grid grid-cols-[1fr_auto] gap-4">
					<h1 className="text-4xl font-bold">Contact</h1>
					<div className="badge badge-secondary rounded-full">
						<p>{contact.phone}</p>
					</div>
				</div>
				<p>{contact.description}</p>
				<div className="flex justify-end gap-4">
					<Link
						href={`mailto:${contact.email}`}
						className="btn btn-secondary"
					>
						{contact.email}
					</Link>
					<Link
						href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${contact.email}`}
						className="btn btn-secondary"
					>
						Gmail
					</Link>
					<Link
						href={`https://outlook.live.com/mail/${contact.email}`}
						className="btn btn-secondary"
					>
						Outlook
					</Link>
				</div>
			</div>
		</section>
	);
}
