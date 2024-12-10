import { z } from "zod";


export const DocTypeSchema = z.object({
    abbr: z.string(),
    name: z.string(),
    value: z.string()
})

export const OrderStatusSchema = z.object({
    name: z.string(),
    value: z.number()
})

export const SearchDocFormSchema = z.object({
    personIdType: z.string(),
    personId: z
        .string()
        .min(1, 'Número de documento es requerido.'),
})

export const ClientSchema = z.object({
    id: z.string(),
    firstName: z
        .string()
        .min(1, 'Nombre es requerido.')
        .max(200, 'Exceso de caracteres.'),
    lastName: z
        .string()
        .min(1, 'Apellido es requerido.'),
    personIdType: z
        .string()
        .min(1, { message: 'Tipo de documento es requerido.' }),
    personId: z
        .string()
        .min(1, 'Número de documento es requerido.'),
    externalId: z.string(),
    booklyId: z.string(),
    email: z
        .string()
        .email('Correo electrónico inválido.'),
    phoneNumber: z.string(),
})

export const ClientFormSchema = ClientSchema.pick({firstName: true, lastName: true, personIdType: true, personId: true, email: true, phoneNumber: true })

export const LabItemSchema = z.object({
    id: z.number(),
    code: z.string(),
    name: z.string(),
    price: z.number(),
})

export const HealthOrderSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    totalAmount: z.string(),
    currency: z.string(),
    items: z.array(LabItemSchema)
})