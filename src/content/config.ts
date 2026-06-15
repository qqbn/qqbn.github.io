import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.string(),
    place: z.string(),
    date: z.string(),
    list: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects, experience };
