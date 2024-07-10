import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    adminThumbnail: "thumbnail",
    mimeTypes: ["application/pdf", "image/jpeg", "image/png"],
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
