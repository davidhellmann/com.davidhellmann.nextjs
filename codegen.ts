import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${process.env.GQL_API_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.GQL_API_TOKEN}`,
        },
      },
    },
  ],
  documents: ["./src/graphql/queries/**/*.graphql"],
  generates: {
    "./src/graphql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        /**
         * Fix issue about multiple same named fragments
         * @ee https://github.com/dotansimha/graphql-code-generator/issues/3063
         */
        dedupeFragments: true,
        withHooks: true,
        skipTypename: true,
        onlyOperationTypes: true,
        maybeValue: "T",
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
      },
    },
  },
};

export default config;
