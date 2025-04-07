import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import AppItemPost from "@/components/AppItemPost";

export default async function PostPage() {
	const payload = await getPayload({ config: payloadConfig });
	// TODO add pagination and sort
	const posts = await payload.find({
		collection: "post",
		limit: 10,
	});

	return (
		<section className="flex flex-col gap-16 p-20">
			<div className="flex flex-col gap-2">
				<h1 className="text-6xl font-bold">Articles</h1>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, quos.
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{posts.docs.map((post) => (
					<AppItemPost key={post.id} post={post} />
				))}
			</div>
		</section>
	);
}
