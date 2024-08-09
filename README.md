# Markdown Table for TypeScript

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
