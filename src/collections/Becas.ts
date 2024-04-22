import { CollectionConfig, Option } from 'payload/types'
import opcionesNivelEducativo from './NivelesEducativos'


const departamentosUruguay = ['Montevideo',
    'Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno',
    'Flores', 'Florida', 'Lavalleja', 'Maldonado',
    'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José',
    'Soriano', 'Tacuarembó', 'Treinta y Tres'
];

const optionsDepartamentos = departamentosUruguay.map((departamento) => ({
    value: departamento,
    label: departamento,
}));

const Becas: CollectionConfig = {
    slug: 'becas',
    admin: {
        useAsTitle: 'nombre', // Utiliza el campo 'nombre' como título en el CMS
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
            name: 'nombre',
            label: 'Nombre',
            type: 'text',
            required: true, // Campo obligatorio
        },
        {
            name: 'mostrar',
            label: 'Mostrar/Ocultar Beca',
            admin: {
                position: 'sidebar', // Coloca el campo en la barra lateral
            },
            type: 'checkbox', // Campo de tipo booleano para mostrar/ocultar
            defaultValue: true, // Valor predeterminado para mostrar la beca
        },
        {
            name: 'link',
            label: 'Enlace',
            type: 'text',
            required: true, // Campo obligatorio
        },
        {
            name: 'institucion',
            label: 'Institución',
            type: 'text',
            required: true, // Campo obligatorio
        },
        {
            name: 'tipo',
            label: 'Tipo de Beca',
            required: true, // Campo obligatorio
            type: 'select', // Cambiado a campo de selección
            options: [ // Opciones predefinidas para el tipo de beca
                { value: 'Apoyo Económico', label: 'Apoyo Económico' },
                { value: 'Transporte', label: 'Transporte' },
                { value: 'Alimentación', label: 'Alimentación' },
                { value: 'Alojamiento', label: 'Alojamiento' },
                { value: 'Material de estudio', label: 'Material de estudio' },
                { value: 'Otros', label: 'Otros' },
            ],
        },

        {
            name: 'departamento',
            label: 'Departamento (dejar en blanco si es nacional)',
            type: 'select', // Cambiado a campo de selección
            hasMany: true, // Puede tener varios departamentos
            options: optionsDepartamentos as Option[],
        },
        {
            name: 'nivel_educativo',
            label: 'Nivel Educativo',
            type: 'relationship',
            relationTo: 'nivelesEducativos', // Slug de la colección relacionada
            hasMany: true, // Si puede tener múltiples relaciones
            admin: {
                isSortable: true, // Si quieres que sea ordenable en el panel de administración
                allowCreate: true, // Si permites la creación de nuevos documentos desde el campo de relación
                sortOptions: 'label', // Opciones de clasificación predeterminadas para el campo de relación
            },
        },
        {
            name: 'edad_min',
            label: 'Edad Mínima',
            type: 'number', // Campo de tipo número para la edad mínima
        },
        {
            name: 'edad_max',
            label: 'Edad Máxima',
            type: 'number', // Campo de tipo número para la edad máxima
        },
        {
            name: 'inicio_postulacion',
            label: 'Inicio del período de postulación',
            type: 'date', // Puedes cambiar el tipo según tus necesidades
        },
        {
            name: 'fin_postulacion',
            label: 'Fin del período de postulación',
            type: 'date', // Puedes cambiar el tipo según tus necesidades
        },
    ],
}

export default Becas
