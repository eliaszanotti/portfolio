import { getPayload } from "payload";
import payloadConfig from "@payload-config";
import AppItemReseller from "@/components/AppItemReseller";

export default async function PostPage() {
	const payload = await getPayload({ config: payloadConfig });
	// TODO add pagination and sort
	const resellers = await payload.find({
		collection: "reseller",
		limit: 10,
	});

	return (
		<section className="flex flex-col gap-16 p-20">
			<div className="flex flex-col gap-2">
				<h1 className="text-6xl font-bold">Revendeurs</h1>
				<h2>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, quos.
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{resellers.docs.map((reseller) => (
					<AppItemReseller key={reseller.id} reseller={reseller} />
				))}
			</div>
		</section>
	);
}
