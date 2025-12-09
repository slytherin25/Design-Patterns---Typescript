/**
 * Defines the interface for all strategy implementations.
 */
export interface Strategy {
  execute(data: string): void;
}

/**
 * First concrete strategy implementation.
 */
export class ConcreteStrategyA implements Strategy {
  execute(data: string): void {
    console.log(`[ConcreteStrategyA] Processing data: ${data}`);
  }
}

/**
 * Second concrete strategy implementation.
 */
export class ConcreteStrategyB implements Strategy {
  execute(data: string): void {
    console.log(`[ConcreteStrategyB] Handling data differently: ${data}`);
  }
}

/**
 * Context that uses a strategy to perform its operation.
 */
export class Context {
  private strategy?: Strategy;

  /**
   * Assigns a strategy implementation to the context.
   */
  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  /**
   * Executes the assigned strategy, if present.
   */
  doSomething(data: string): void {
    if (!this.strategy) {
      throw new Error("Strategy has not been set.");
    }
    return this.strategy.execute(data);
  }
}
