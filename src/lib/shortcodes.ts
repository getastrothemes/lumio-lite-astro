// Shortcodes made available to MDX content via the `components` prop on
// `<Content />`. Replaces the auto-injected imports from `astro-auto-import`.
// Pass this map wherever MDX collections are rendered: `<Content components={shortcodes} />`.
import ImageList from "@/shortcodes/ImageList.astro";
import ImageItem from "@/shortcodes/ImageItem.astro";
import InfoBlockItem from "@/shortcodes/InfoBlockItem.astro";
import InfoBlockList from "@/shortcodes/InfoBlockList.astro";

export const shortcodes = {
  ImageList,
  ImageItem,
  InfoBlockItem,
  InfoBlockList,
};
