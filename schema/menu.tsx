import { z } from 'zod'

export const menuSchema = z.object({
    // id: z.string().uuid(),
    name: z.string().min(1, { message: 'Name is required' }),
    // description: z.string().optional(),
    // price: z.number().min(0, { message: 'Price must be a positive number' }),
    // category: z.string().min(1, { message: 'Category is required' }),
    // imageUrl: z.string().url({ message: 'Invalid URL format' }).optional(),
    // isAvailable: z.boolean().default(true),
});