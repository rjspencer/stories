import { LoaderFunction, json, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import ContentfulDocument from "~/components/ContentfulDocument";
import { Stories } from "~/services/contentful";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.id, "No id provided");
  const story = await Stories.get(params.id);
  invariant(story, "No story found with that ID");

  if (!params.pageId) {
    return redirect(`/stories/${params.id}/page/${story.entryPage?.sys.id}`);
  }

  return json({
    story,
  });
};

const Story: React.FC = () => {
  const { story } = useLoaderData<typeof loader>();

  return (
    <div>
      <Link to="/stories">Back to stories</Link>
      <h1>{story.title}</h1>
      <ContentfulDocument document={story.description} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Story;
