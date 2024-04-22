import { CollectionConfig } from 'payload/types'

const NivelesEducativos: CollectionConfig = {
    slug: 'nivelesEducativos',
    admin: {
        useAsTitle: 'label', // Utiliza el campo 'label' como título en el CMS
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
            name: 'value',
            label: 'Valor',
            type: 'text',
            required: true, // Campo obligatorio
        },
        {
            name: 'label',
            label: 'Etiqueta',
            type: 'text',
            required: true, // Campo obligatorio
        },
    ],
}

export default NivelesEducativos
