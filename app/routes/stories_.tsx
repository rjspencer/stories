import { Link, json, useLoaderData } from "@remix-run/react";

import ContentfulDocument from "~/components/ContentfulDocument";
import { Stories } from "~/services/contentful";

export async function loader() {
  const storyList = await Stories.getAll();
  return json({
    storyList,
  });
}

export default function StoriesPage() {
  const { storyList } = useLoaderData<typeof loader>();

  return (
    <article>
      <h1>Stories Page</h1>
      <ul>
        {storyList.map((story) => (
          <li key={story.sys.id}>
            <p>{story.fields.title}</p>
            <ContentfulDocument document={story.fields.description} />
            <Link to={`/stories/${story.sys.id}`}>Read now...</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
