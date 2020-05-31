module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  useTabs: false,
  endOfLine: "lf",
  quoteProps: "consistent",
  overrides: [
    {
      files: [".prettierrc", ".eslintrc"],
      options: {
        parser: "json",
      },
    },
    {
      files: "**/*.json",
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ["**/*.yml", "**/*.yaml"],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: "package*.json",
      options: {
        printWidth: 1000,
      },
    },
  ],
};
