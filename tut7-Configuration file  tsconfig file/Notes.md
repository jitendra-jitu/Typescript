# 📘 TypeScript Configuration Guide

This README provides a complete overview of the **TypeScript configuration file (`tsconfig.json`)**.  
It explains how to create, customize, and use it effectively in your projects.

---

## 🔹 What is `tsconfig.json`?

- `tsconfig.json` is the configuration file for the **TypeScript compiler (`tsc`)**.
- It tells the compiler:
  - Which files to include/exclude
  - How to compile them
  - What JavaScript version and module system to target

When you run `tsc` without arguments, it looks for `tsconfig.json` in the current directory.

---

## 🔹 Creating a `tsconfig.json`

Generate a default config file:
```bash
tsc --init
```


# Basic Structure

```
{
  "compilerOptions": {
    "target": "es6",              // Output JS version
    "module": "commonjs",         // Module system (Node.js style)
    "strict": true,               // Enable strict type checking
    "outDir": "./dist",           // Output folder for compiled JS
    "rootDir": "./src",           // Source folder for TS files
    "esModuleInterop": true,      // Allow default imports from CommonJS
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],             // Files/folders to compile
  "exclude": ["node_modules", "dist"] // Files/folders to ignore
}
```


# Quick Commands

## Initialize a tsconfig.json
tsc --init

## Compile all files (uses tsconfig.json)
tsc

## Compile and watch for changes
tsc -w

## Compile specific files (ignores tsconfig.json)
tsc file1.ts file2.ts

