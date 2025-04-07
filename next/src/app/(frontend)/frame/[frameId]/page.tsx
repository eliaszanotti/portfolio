import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
	params: Promise<{ frameId: string }>;
};

export default async function FramePage({ params }: Props) {
	const { frameId } = await params;
	const payload = await getPayload({ config: payloadConfig });
	let frameData;
	try {
		frameData = await payload.findByID({
			collection: "frame",
			id: frameId,
			depth: 2,
		});
	} catch (error) {
		console.error(error);
		// TODO voir car on peut normalement creer des composants pour afficher les erreurs
		return <div>Frame not found</div>;
	}

	return (
		<>
			<section className="h-screen relative overflow-hidden">
				<Image
					className="h-full w-full bg-cover object-cover"
					src={frameData.sizes?.large?.url || ""}
					alt={frameData.name || ""}
					width={frameData.sizes?.large?.width || 0}
					height={frameData.sizes?.large?.height || 0}
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50 grid place-items-center">
					<div className="w-4/5 flex flex-col gap-4">
						<h1 className="text-6xl font-bold">{frameData.name}</h1>
						<h2 className="text-3xl">{frameData.description}</h2>
					</div>
				</div>
			</section>
			<section className="grid place-items-center py-20 px-5">
				<article className="prose xl:prose-xl lg:prose-lg md:prose-base prose-sm break-words">
					<RichText
						data={frameData.content as SerializedEditorState}
					/>
				</article>
			</section>
		</>
	);
}
