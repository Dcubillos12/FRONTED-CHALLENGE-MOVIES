// module.exports = {
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: "tsconfig.json",
//     tsconfigRootDir: __dirname,
//     sourceType: "module",
//   },
//   plugins: ["@typescript-eslint/eslint-plugin", "unused-imports"],
//   extends: [
//     "plugin:@typescript-eslint/recommended",
//     "plugin:prettier/recommended", // Asegúrate de que Prettier sea el responsable del formato
//     "plugin:@typescript-eslint/recommended-requiring-type-checking",
//     "plugin:@typescript-eslint/strict",
//   ],
//   root: true,
//   env: {
//     node: true,
//     jest: true,
//   },
//   ignorePatterns: [".eslintrc.js", "global.d.ts", "jest.base.config.ts"],
//   rules: {
//     "unused-imports/no-unused-imports": "error",
//     "no-duplicate-imports": "error",
//     "no-console": "warn", // Cambiado de error a warn para evitar paradas en desarrollo
//     "@typescript-eslint/no-explicit-any": "off", // Desactivado para evitar errores por usar 'any'
//     "@typescript-eslint/explicit-function-return-type": "off", // Para no forzar retorno explícito en funciones
//     "@typescript-eslint/no-inferrable-types": "off", // Desactivar para evitar errores con tipos inferidos
//     "@typescript-eslint/no-unused-vars": [
//       "warn",
//       {
//         argsIgnorePattern: "^_",
//         varsIgnorePattern: "^_",
//         caughtErrorsIgnorePattern: "^_",
//       },
//     ],
//     "@typescript-eslint/no-unsafe-assignment": "off",
//     "@typescript-eslint/no-unsafe-member-access": "off",
//     "@typescript-eslint/no-unsafe-call": "off",
//     "@typescript-eslint/no-non-null-assertion": "off", // Permitir '!' para evitar errores con tipos opcionales
//     "prettier/prettier": [
//       "error",
//       {
//         singleQuote: true,
//         semi: false,
//         trailingComma: "es5",
//         bracketSpacing: true,
//         printWidth: 80, // Ajustar a la longitud de línea estándar
//       },
//     ],
//     // Reglas de consistencia para tipado y convenciones de nombres
//     "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
//     "@typescript-eslint/naming-convention": [
//       "error",
//       {
//         selector: "default",
//         format: ["camelCase", "PascalCase"],
//       },
//       {
//         selector: "variable",
//         format: ["camelCase", "UPPER_CASE", "PascalCase"],
//         leadingUnderscore: "allow",
//       },
//       {
//         selector: "parameter",
//         format: ["camelCase"],
//         leadingUnderscore: "allow",
//       },
//       {
//         selector: "typeLike",
//         format: ["PascalCase"],
//       },
//       {
//         selector: "enumMember",
//         format: ["UPPER_CASE"],
//       },
//     ],
//   },
// };
