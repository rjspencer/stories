import client from "./client";
import type { TypeCyoaDecisionSkeleton } from "./contentTypes";

export const getAll = async () => {
  const response = await client.getEntries<TypeCyoaDecisionSkeleton>({
    content_type: "cyoaDecision",
  });
  return response.items;
};

export const get = async (id: string) => {
  const response = await client.getEntry<TypeCyoaDecisionSkeleton>(id);

  if (response.sys.contentType.sys.id === "cyoaDecision") {
    return response.fields;
  }
  return null;
};
