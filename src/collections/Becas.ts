import { slateEditor } from "@payloadcms/richtext-slate";
import { CollectionConfig, Option } from "payload/types";

const departamentosUruguay = [
  "Montevideo",
  "Artigas",
  "Canelones",
  "Cerro Largo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Paysandú",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembó",
  "Treinta y Tres",
];

const optionsDepartamentos = departamentosUruguay.map((departamento) => ({
  value: departamento,
  label: departamento,
}));

const Becas: CollectionConfig = {
  slug: "becas",
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
      name: "mostrar",
      label: "Mostrar Beca",
      required: true,
      admin: {
        position: "sidebar", // Coloca el campo en la barra lateral
      },
      type: "checkbox", // Campo de tipo booleano para mostrar/ocultar
    },
    {
      name: "institucion",
      label: "Institución",
      type: "text",
      required: true,
    },
    {
      name: "link",
      label: "Enlace",
      type: "text",
    },
    {
      name: "tipo",
      label: "Tipo de Beca",
      required: true,
      type: "relationship", // Cambiado a campo de relación
      relationTo: "tiposBeca", // Relaciona con la colección de tiposBeca
      hasMany: true,
      admin: {
        allowCreate: true, // Permite crear nuevos tipos desde este campo
        sortOptions: "label", // Opciones de clasificación para el campo de relación
      },
    },
    {
      name: "departamento",
      label: "Departamento (dejar en blanco si es nacional)",
      type: "select",
      hasMany: true, // Puede tener varios departamentos
      options: optionsDepartamentos as Option[],
    },
    {
      name: "nivel_educativo",
      label: "Nivel Educativo (dejar en blanco si es para todos)",
      type: "relationship",
      relationTo: "nivelesEducativos",
      hasMany: true, // Puede tener múltiples relaciones
      admin: {
        allowCreate: true,
        sortOptions: "label",
      },
    },
    {
      name: "edad_min",
      label: "Edad Mínima",
      type: "number",
    },
    {
      name: "edad_max",
      label: "Edad Máxima",
      type: "number",
    },
    {
      name: "inicio_postulacion",
      label: "Inicio del período de postulación",
      type: "date",
    },
    {
      name: "fin_postulacion",
      label: "Fin del período de postulación",
      type: "date",
    },
    {
      name: "observaciones",
      label: "Detalles/Observaciones",
      type: "textarea",
    },
    {
      name: "extras",
      label: "Información adicional",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["h4"],
        },
      }),
    },
  ],
};

export default Becas;
