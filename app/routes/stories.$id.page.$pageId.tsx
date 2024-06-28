import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import ContentfulDocument from "~/components/ContentfulDocument";
import { Pages } from "~/services/contentful";
import { isTypeCyoaDecision } from "~/services/contentful/contentTypes";

type LoaderData = {
  storyId: string;
  pageId: string;
  page: NonNullable<Awaited<ReturnType<typeof Pages.get>>>;
};

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.id, "No story ID provided");
  invariant(params.pageId, "No page ID provided");
  const page = await Pages.get(params.pageId);
  invariant(page, "No page found with that ID");

  return json({
    storyId: params.id,
    pageId: params.pageId,
    page,
  });
}

const StoriesPage: React.FC = () => {
  const { page, storyId } = useLoaderData<LoaderData>();

  return (
    <article>
      <h2>{page.title}</h2>
      {page.content ? <ContentfulDocument document={page.content} /> : null}
      <section>
        <ul>
          {page.choice?.map((choice) => {
            if (!isTypeCyoaDecision(choice)) {
              return null;
            }

            return (
              <li key={choice.sys.id}>
                <Link
                  key={choice.sys.id}
                  to={`/stories/${storyId}/page/${choice?.fields.destination.sys.id}`}
                >
                  {choice?.fields?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
};

export default StoriesPage;
