import client from "./client";
import { isTypeCyoaPage, TypeCyoaPageSkeleton } from "./contentTypes";

export const getAll = async () => {
  const response = await client.getEntries<TypeCyoaPageSkeleton>({
    content_type: "cyoaPage",
  });
  return response.items;
};

export const get = async (id: string) => {
  const response = await client.getEntry<TypeCyoaPageSkeleton>(id);

  if (isTypeCyoaPage(response)) {
    return response.fields;
  }
  return null;
};
