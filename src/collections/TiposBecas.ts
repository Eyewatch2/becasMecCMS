import { CollectionConfig } from "payload/types";

const TiposBeca: CollectionConfig = {
  slug: "tiposBeca",
  admin: {
    useAsTitle: "nombre", // Utiliza el campo 'nombre' como título en el CMS
  },
  access: {
    read: () => true,
    // Permite crear, actualizar y eliminar solo a usuarios autenticados en el CMS
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
      required: true,
    },
    {
      name: "imagen_fondo",
      label: "Imagen de Fondo",
      required: true,
      type: "upload",
      relationTo: "media", // Asegúrate de tener una colección de "media" o ajusta el `relationTo` según tu configuración
      admin: {
        description: "Imagen que se usará como fondo para este tipo de beca.",
      },
    },
    {
      name: "color",
      label: "Color de etiqueta",
      type: "text",
      required: true,
      admin: {
        description: "Código de color en formato hexadecimal (#RRGGBB).",
      },
    },
    {
      name: "textColor",
      label: "Color de texto",
      type: "text",
      required: true,
      admin: {
        description: "Código de color en formato hexadecimal (#RRGGBB).",
      },
    },
    {
      name: "icono",
      label: "Icono",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Icono asociado con este tipo de beca.",
      },
    },
  ],
};

export default TiposBeca;
