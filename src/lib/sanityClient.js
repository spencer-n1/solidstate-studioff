import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'k6e8bzq5',
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-05-03', 
});
