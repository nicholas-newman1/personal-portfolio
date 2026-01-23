import { type SchemaTypeDefinition } from 'sanity';
import { project } from './project';
import { workExperience } from './workExperience';
import { education } from './education';
import { siteSettings } from './siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, workExperience, education, siteSettings],
};
