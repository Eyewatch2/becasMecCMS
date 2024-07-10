import { CollectionConfig, Option } from "payload/types";

const Becas: CollectionConfig = {
  slug: "noticias",
  admin: {
    useAsTitle: "titulo", // Utiliza el campo 'titulo' como título en el CMS
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
      name: "titulo",
      label: "Título",
      type: "text",
      required: true,
    },
    {
      name: "mostrar",
      label: "Mostrar Noticia",
      required: true,
      admin: {
        position: "sidebar", // Coloca el campo en la barra lateral
      },
      type: "checkbox", // Campo de tipo booleano para mostrar/ocultar
    },
    {
      name: "link",
      label: "Enlace",
      required: true,
      type: "text",
    },
    {
      name: "imagen",
      label: "Imagen",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Becas;
