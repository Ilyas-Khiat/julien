// redisClient.mjs
import { createClient } from "redis";

const client = await createClient({ url: "redis://feature-redis:6379" })
  .on("error", (error) => console.log(error))
  .connect();

export async function getKey(key) {
  return await client.get(key);
}

