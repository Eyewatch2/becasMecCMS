import { CollectionConfig } from "payload/types";
const Config: CollectionConfig = {
  slug: "config",
  access: {
    read: () => true,
    create: () => false,
    update: ({ req }) => Boolean(req.user),
    delete: () => false,
  },
  fields: [
    {
      name: "pdf",
      label: "PDF",
      type: "upload",
      required: true,
      relationTo: "media",
    },
  ],
};

export default Config;
