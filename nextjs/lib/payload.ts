import config from "@payload-config";
import type { Payload } from "payload";
import { getPayload } from "payload";

let payloadInstance: Promise<Payload> | null = null;

export async function getPayloadClient() {
	if (!payloadInstance) {
		payloadInstance = getPayload({ config });
	}
	return payloadInstance;
}
