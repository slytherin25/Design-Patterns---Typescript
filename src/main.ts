// main.ts
import Singleton from "./singleton.js";
import type { Creator } from "./factory_method.js";
import { ConcreteCreatorA, ConcreteCreatorB } from "./factory_method.js";

import type { Strategy } from "./strategy.js";
import { ConcreteStrategyA, ConcreteStrategyB, Context } from "./strategy.js";

import { Publisher, ConcreteSubscriberA, ConcreteSubscriberB } from "./observer.js";

import { ConcreteComponent, ConcreteDecorator } from "./decorator.js";

import { Director, CarBuilder, TruckBuilder } from "./builder.js";

/**
 * Entry point for demonstrating various design patterns.
 */
function main(): void {
  console.log("\n=== Design Patterns Demonstration ===\n");

  runSingletonDemo();
  runFactoryMethodDemo();
  runBuilderDemo();
  runStrategyDemo();
  runObserverDemo();
  runDecoratorDemo();

  console.log("\nAll demonstrations complete.\n");
}

/**
 * Demonstrates the Singleton design pattern.
 */
function runSingletonDemo(): void {
  console.log("--- Singleton Pattern ---");

  const instance = Singleton.getInstance();

  console.log("Initial value:", instance.getSomeString());

  instance.setSomeString("some output");

  console.log("Updated value:", instance.getSomeString());
  console.log(); // spacing
}

/**
 * Demonstrates the Factory Method design pattern.
 */
function runFactoryMethodDemo(): void {
  console.log("--- Factory Method Pattern ---");

  const creators: Creator[] = [new ConcreteCreatorA(), new ConcreteCreatorB()];

  for (const creator of creators) {
    const product = creator.createProduct();
    console.log(`Created product from ${creator.constructor.name}:`);
    product.doStuff();
  }

  console.log();
}

/**
 * Demonstrates the Builder design pattern.
 */
function runBuilderDemo(): void {
  console.log("--- Builder Pattern ---");

  // Use Director with a CarBuilder
  const carBuilder = new CarBuilder();
  const director = new Director(carBuilder);

  console.log("Building a Car using Director and CarBuilder...");
  director.make();
  const car = carBuilder.getResult();
  console.log("Car built:", car);

  // Switch to a TruckBuilder
  console.log("\nSwitching Director to TruckBuilder...");
  const truckBuilder = new TruckBuilder();
  director.changeBuilder(truckBuilder);

  console.log("Building a Truck using Director and TruckBuilder...");
  director.make();
  const truck = truckBuilder.getResult();
  console.log("Truck built:", truck);

  console.log();
}

/**
 * Demonstrates the Strategy design pattern.
 */
function runStrategyDemo(): void {
  console.log("--- Strategy Pattern ---");

  const context = new Context();

  const strategies: Strategy[] = [new ConcreteStrategyA(), new ConcreteStrategyB()];

  for (const strategy of strategies) {
    console.log(`Switching to: ${strategy.constructor.name}`);
    context.setStrategy(strategy);
    context.doSomething("input data");
    console.log();
  }
}

/**
 * Demonstrates the Observer (Publisher–Subscriber) design pattern.
 */
function runObserverDemo(): void {
  console.log("--- Observer Pattern ---");

  const publisher = new Publisher();

  const subscriberA = new ConcreteSubscriberA();
  const subscriberB = new ConcreteSubscriberB();

  console.log("Subscribing ConcreteSubscriberA and ConcreteSubscriberB...");
  publisher.subscribe(subscriberA);
  publisher.subscribe(subscriberB);

  console.log("Running main business logic (1st time)...");
  publisher.mainBusinessLogic();

  console.log("\nUnsubscribing ConcreteSubscriberB...");
  publisher.unsubscribe(subscriberB);

  console.log("Running main business logic (2nd time)...");
  publisher.mainBusinessLogic();

  console.log();
}

/**
 * Demonstrates the Decorator design pattern.
 */
function runDecoratorDemo(): void {
  console.log("--- Decorator Pattern ---");

  // Base component
  const component = new ConcreteComponent();
  console.log("Executing plain component:");
  component.execute();

  // Decorated component
  console.log("\nWrapping component with ConcreteDecorator...");
  const decorated = new ConcreteDecorator(component);

  console.log("Executing decorated component:");
  decorated.execute();

  console.log("\nExecuting decorator-specific extra behavior:");
  decorated.extra();

  console.log();
}

// Execute main
main();
