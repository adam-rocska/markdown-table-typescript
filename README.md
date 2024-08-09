# Markdown Table for TypeScript

[![npm version](https://img.shields.io/npm/v/@adam-rocska/markdown-table)](https://www.npmjs.com/package/@adam-rocska/markdown-table)
[![License](https://img.shields.io/npm/l/@adam-rocska/markdown-table)](https://github.com/adam-rocska/markdown-table-typescript/blob/main/LICENSE)

A library with a simple API for generating Markdown tables.

## Installation

```zsh
pnpm add @adam-rocska/markdown-table
```

```zsh
npm install @adam-rocska/markdown-table
```

```zsh
yarn add @adam-rocska/markdown-table
```

## Usage

```typescript
import {markdownTable} from '@adam-rocska/markdown-table';

markdownTable(
  ['First Name', 'Last Name', 'Most Loved Technology'],
  ['Adam', 'Rocska', 'Swift'],
  ['John', 'Doe', 'TypeScript'],
  ['Jane', 'Doe', 'Python'],
  ['Elon', 'Musk', 'JavaScript']
);
```

The code above yields the following output:

```md
| First Name | Last Name | Most Loved Technology |
| ---------- | --------- | --------------------- |
| Adam       | Rocska    | Swift                 |
| John       | Doe       | TypeScript            |
| Jane       | Doe       | Python                |
| Elon       | Musk      | JavaScript            |
```
