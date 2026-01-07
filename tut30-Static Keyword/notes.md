# What is static?

- The static keyword in TypeScript (and JavaScript classes) defines class-level members.
- These members belong to the class itself, not to individual instances.

## Accessed using the class name, not via this.

### Syntax
```ts
class Example {
  static count: number = 0;

  static showCount() {
    console.log(`Count is: ${Example.count}`);
  }
}

// Accessing static members
Example.count = 5;
Example.showCount(); // Output: Count is: 5

```