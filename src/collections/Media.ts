import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "media",
    adminThumbnail: "thumbnail",
    mimeTypes: ["application/pdf"],
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
  ],
};

export default Media;
