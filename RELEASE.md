# 1.0.0

Initial release.
Enjoy.

## Examples

```ts
markdownTable(
  [`Trait`, `Absolute Value`, `Relative Value`],
  [`Units Per Em`, `${anatomy.unitsPerEm}`, `${relativized.unitsPerEm}`],
  [`Ascender`, `${anatomy.ascender}`, `${relativized.ascender}`],
  [`Descender`, `${anatomy.descender}`, `${relativized.descender}`],
  [`X-Height`, `${anatomy.xHeight}`, `${relativized.xHeight}`],
  [`Cap Height`, `${anatomy.capHeight}`, `${relativized.capHeight}`]
);
```

```ts
markdownTable(
  ["Attribute", "Value"],
  ["Copyright", resolveLocalizedName(font.names.copyright)],
  ["Description", resolveLocalizedName(font.names.description)],
  ["Designer", resolveLocalizedName(font.names.designer)],
  ["Designer URL", resolveLocalizedName(font.names.designerURL)],
  ["Font Family", resolveLocalizedName(font.names.fontFamily)],
  ["Font Subfamily", resolveLocalizedName(font.names.fontSubfamily)],
  ["Full Name", resolveLocalizedName(font.names.fullName)],
  ["License", resolveLocalizedName(font.names.license)],
  ["License URL", resolveLocalizedName(font.names.licenseURL)],
  ["Manufacturer", resolveLocalizedName(font.names.manufacturer)],
  ["Manufacturer URL", resolveLocalizedName(font.names.manufacturerURL)],
  ["postScript Name", resolveLocalizedName(font.names.postScriptName)],
  ["Trademark", resolveLocalizedName(font.names.trademark)],
  ["Version", resolveLocalizedName(font.names.version)],
)
````

The examples above yield the following tables below:

| Attribute        | Value                                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copyright        | Copyright 2022 The Figtree Project Authors (<https://github.com/erikdkennedy/figtree>)                                                              |
| Description      |                                                                                                                                                   |
| Designer         | Erik Kennedy                                                                                                                                      |
| Designer URL     | <https://erikdkennedy.com/>                                                                                                                         |
| Font Family      | Figtree Light                                                                                                                                     |
| Font Subfamily   | Regular                                                                                                                                           |
| Full Name        | Figtree Light                                                                                                                                     |
| License          | This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: <https://scripts.sil.org/OFL> |
| License URL      | <https://scripts.sil.org/OFL>                                                                                                                       |
| Manufacturer     | Erik Kennedy                                                                                                                                      |
| Manufacturer URL | <https://erikdkennedy.com/>                                                                                                                         |
| postScript Name  | Figtree-Light                                                                                                                                     |
| Trademark        |                                                                                                                                                   |
| Version          | Version 2.001;gftools[0.9.30]                                                                                                                     |

and

| Trait        | Absolute Value | Relative Value |
| ------------ | -------------- | -------------- |
| Units Per Em | 1000           | 1              |
| Ascender     | 950            | 0.95           |
| Descender    | -250           | -0.25          |
| X-Height     | 500            | 0.5            |
| Cap Height   | 700            | 0.7            |
