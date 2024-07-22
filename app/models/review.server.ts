import { User, Review } from "@prisma/client";

import { prisma } from "~/db.server";

export function getReview({
  id,
  userId,
}: Pick<Review, "id"> & {
  userId: User["id"];
}) {
  return prisma.review.findFirst({
    select: { id: true, body: true, rating: true },
    where: { id, userId },
  });
}

export function getReviewListItems({ userId }: { userId: User["id"] }) {
  return prisma.review.findMany({
    where: { userId },
    select: { id: true, rating: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createReview({
  body,
  rating,
  userId,
}: Pick<Review, "body" | "rating"> & {
  userId: User["id"];
}) {
  return prisma.review.create({
    data: {
      rating,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteReview({
  id,
  userId,
}: Pick<Review, "id"> & { userId: User["id"] }) {
  return prisma.review.deleteMany({
    where: { id, userId },
  });
}
