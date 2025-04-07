import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import Image from "next/image";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type Props = {
	params: Promise<{ postId: string }>;
};

export default async function PostPage({ params }: Props) {
	const { postId } = await params;
	const payload = await getPayload({ config: payloadConfig });
	let postData;
	try {
		postData = await payload.findByID({
			collection: "post",
			id: postId,
			depth: 2,
		});
	} catch (error) {
		console.error(error);
		// TODO voir car on peut normalement creer des composants pour afficher les erreurs
		return <div>Post not found</div>;
	}

	return (
		<>
			<section className="h-screen relative overflow-hidden">
				<Image
					className="h-full w-full bg-cover object-cover"
					src={postData.sizes?.large?.url || ""}
					alt={postData.title || ""}
					width={postData.sizes?.large?.width || 0}
					height={postData.sizes?.large?.height || 0}
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50 grid place-items-center">
					<div className="w-4/5 flex flex-col gap-4">
						<h1 className="text-6xl font-bold">{postData.title}</h1>
					</div>
				</div>
			</section>
			<section className="grid place-items-center py-20 px-5">
				<article className="prose xl:prose-xl lg:prose-lg md:prose-base prose-sm break-words">
					<RichText
						data={postData.content as SerializedEditorState}
					/>
				</article>
			</section>
		</>
	);
}
