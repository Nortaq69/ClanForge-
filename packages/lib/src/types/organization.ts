import { z } from 'zod';

export const OrganizationSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  tag: z.string().min(2).max(10).regex(/^[A-Z0-9]+$/),
  description: z.string().max(500).optional(),
  logo: z.string().url().optional(),
  website: z.string().url().optional(),
  founded: z.date().optional(),
  country: z.string().min(2).max(3).optional(),
  timezone: z.string().optional(),
  settings: z.object({
    theme: z.object({
      primaryColor: z.string().regex(/^#[0-9A-F]{6}$/i),
      secondaryColor: z.string().regex(/^#[0-9A-F]{6}$/i),
      accentColor: z.string().regex(/^#[0-9A-F]{6}$/i),
    }),
    features: z.object({
      vodStorage: z.boolean().default(true),
      analytics: z.boolean().default(true),
      tournaments: z.boolean().default(true),
      sponsorships: z.boolean().default(false),
    }),
    integrations: z.object({
      discord: z.boolean().default(false),
      twitch: z.boolean().default(false),
      youtube: z.boolean().default(false),
      googleCalendar: z.boolean().default(false),
    }),
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const OrganizationCreateSchema = OrganizationSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const OrganizationUpdateSchema = OrganizationCreateSchema.partial();

export type Organization = z.infer<typeof OrganizationSchema>;
export type OrganizationCreate = z.infer<typeof OrganizationCreateSchema>;
export type OrganizationUpdate = z.infer<typeof OrganizationUpdateSchema>;
