// main.ts
import Singleton from "./singleton.js";
import type { Creator } from "./factory_method.js";
import { ConcreteCreatorA, ConcreteCreatorB } from "./factory_method.js";

/**
 * Entry point for demonstrating design patterns.
 */
function main(): void {
  console.log("\n=== Design Patterns Demonstration ===");

  runSingletonDemo();
  runFactoryMethodDemo();

  // ------------------------------------------------------------------
  // Add future pattern demos here, e.g.:
  // runStrategyDemo();
  // runObserverDemo();
  // runDecoratorDemo();
  // ------------------------------------------------------------------

  console.log("\nAll demonstrations complete.\n");
}

/**
 * Demonstrates the Singleton design pattern.
 */
function runSingletonDemo(): void {
  console.log("\n--- Singleton Pattern ---");

  const instance = Singleton.getInstance();

  console.log("Initial value:", instance.getSomeString());

  instance.setSomeString("some output");

  console.log("Updated value:", instance.getSomeString());
}

/**
 * Demonstrates the Factory Method design pattern.
 */
function runFactoryMethodDemo(): void {
  console.log("\n--- Factory Method Pattern ---");

  const creators: Creator[] = [
    new ConcreteCreatorA(),
    new ConcreteCreatorB(),
  ];

  for (const creator of creators) {
    const product = creator.createProduct();
    product.doStuff();
  }
}

// Execute main
main();
