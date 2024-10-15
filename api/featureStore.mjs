//get state of feature by calling redisClient
import { getKey } from "./redisClient.mjs";

export async function getFeatureState(featureName) {
  const state = await getKey(featureName);
  return state || "disabled";
}