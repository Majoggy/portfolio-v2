import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_STRAPI_URL
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
    : 'http://localhost:1337/graphql',
  documents: ['lib/**/*.ts'],
  generates: {
    './lib/graphql-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
    },
  },
};

export default config;
