import { z } from "zod";
import { ClientFormSchema, ClientSchema,DocTypeSchema,HealthOrderSchema, LabItemSchema, OrderStatusSchema, SearchDocFormSchema } from "@/schema";

export type DocTypes = z.infer<typeof DocTypeSchema>

export type OrderStatus = z.infer<typeof OrderStatusSchema>

export type SearchDocFormData = z.infer<typeof SearchDocFormSchema>

export type Client = z.infer<typeof ClientSchema>

export type ClientFormData = z.infer<typeof ClientFormSchema>

export type LabItem = z.infer<typeof LabItemSchema>

export type HealthOrder = z.infer<typeof HealthOrderSchema>