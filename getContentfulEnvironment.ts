import * as contentfulManagement from "contentful-management";
// import { EnvironmentGetter } from "contentful-typescript-codegen";
import * as dotenv from "dotenv";
import invariant from "tiny-invariant";

dotenv.config();
const {
  CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} = process.env;

invariant(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);
invariant(CONTENTFUL_SPACE_ID);
invariant(CONTENTFUL_ENVIRONMENT);

const getContentfulEnvironment = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(CONTENTFUL_ENVIRONMENT));
};

module.exports = getContentfulEnvironment;
