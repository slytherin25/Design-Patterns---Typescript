import Singleton from "./singleton.js";

/**
 * Entry point for demonstrating design patterns.
 */
function main(): void {
    console.log("\n=== Design Patterns Demonstration ===");

    runSingletonDemo();
    
    // ------------------------------------------------------------------
    // Add future pattern demos here, e.g.:
    // runFactoryMethodDemo();
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

// Execute main
main();
