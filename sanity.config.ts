import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'StratBridge & Co. Insights',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: [
      {
        name: 'post',
        title: 'Blog Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
          },
          {
          name: 'isFeatured',
          title: 'Featured on Home Page',
          type: 'boolean',
          description: 'Toggle ON if this article should be highlighted first on the home page.',
          initialValue: false,
        },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                { title: 'Press Release', value: 'PRESS RELEASE' },
                { title: 'Insight', value: 'INSIGHT' },
                { title: 'Article', value: 'ARTICLE' },
                { title: 'Research', value: 'RESEARCH' },
              ],
            },
          },
          {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
          },
          {
            name: 'mainImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
          },
          {
            name: 'excerpt',
            title: 'Excerpt / Summary',
            type: 'text',
            rows: 3,
          },
          {
            name: 'body',
            title: 'Body Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
          },
        ],
      },
    ],
  },
});