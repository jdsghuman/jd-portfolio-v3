import { PageType, RobotsContent, MetaTags } from "@components/Meta/types";
import { concatenateStrings } from "@components/Utils/Util";

export const defaultMetaTags: MetaTags = {
  canonical: "https://www.bobbieleeghuman.com",
  description: "UX Designer | Portfolio",
  image: "https://www.bobbieleeghuman.com/images/bobbie.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "bobbieleeghuman",
  type: PageType.website,
};
