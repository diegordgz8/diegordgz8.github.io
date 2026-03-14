import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            description: z.string(),
            stack: z.array(z.string()),
            cover: image().optional(),
            pictures: z.array(image()).optional(),
            link: z.string().url().optional(),
            github: z.string().url().optional(),
        }),
});

const jobs = defineCollection({
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            position: z.string(),
            dateFrom: z.string(),
            // dateFrom: z.date(),
            dateTo: z.string().optional(),
            // dateTo: z.date().optional(),
            description: z.string(),
            stack: z.array(z.string()),
            cover: image().optional(),
        }),
});

export const collections = { jobs, projects };
