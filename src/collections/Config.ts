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
      name: "modal",
      label: "Activar modal",
      type: "checkbox",
    },
    {
      name: "modal_automated",
      label: "Automatizar contenido",
      type: "checkbox",
      admin: {
        condition: (data) => data.modal === true,
      },
    },
    {
      name: "modal_group",
      label: "Configuración del Modal",
      type: "group",
      admin: {
        description:
          'Si está activo, el mensaje de la modal se automatizará por mes',
        condition: (data) =>
          data.modal === true && !data.modal_automated,
      },
      fields: [
        {
          name: "modal_title",
          required: true,
          label: "Título del modal",
          type: "text",
        },
        {
          name: "modal_text",
          required: true,
          label: "Texto del modal",
          type: "textarea",
        },
      ],
    },
  ],
};

export default Config;
