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
    order: z.number(),
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

const contact = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    value: z.string(),
    href: z.string(),
    icon: z.string(),
    order: z.number(),
    copyable: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, contact };
