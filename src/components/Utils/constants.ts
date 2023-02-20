import { PageType, RobotsContent, MetaTags } from "@components/Meta/types";
import { concatenateStrings } from "@components/Utils/Util";

export const defaultMetaTags: MetaTags = {
  canonical: "https://www.jdghuman.com",
  description: "Software Engineer | Front End Engineer",
  image: "https://www.jdghuman.com/images/jd.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "JD Ghuman",
  type: PageType.website,
};
