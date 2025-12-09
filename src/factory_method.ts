/**
 * Represents a product in the Factory Method pattern.
 * Concrete implementations encapsulate specific behavior
 * that clients can use via this interface.
 */
export interface Product {
  /**
   * Executes the primary operation of the product.
   */
  doStuff(): void;
}

/**
 * Creator interface that declares the factory method.
 * Concrete creators implement this interface and decide
 * which concrete product to instantiate.
 */
export interface Creator {
  /**
   * Factory method responsible for creating a product.
   *
   * @returns A concrete implementation of {@link Product}.
   */
  createProduct(): Product;
}

/**
 * Concrete implementation of {@link Product}.
 * Encapsulates behavior specific to “Product A”.
 */
export class ConcreteProductA implements Product {
  /**
   * Executes the behavior associated with ConcreteProductA.
   */
  doStuff(): void {
    console.log("ConcreteProductA doing work...");
  }
}

/**
 * Concrete implementation of {@link Product}.
 * Encapsulates behavior specific to “Product B”.
 */
export class ConcreteProductB implements Product {
  /**
   * Executes the behavior associated with ConcreteProductB.
   */
  doStuff(): void {
    console.log("ConcreteProductB doing work...");
  }
}

/**
 * Concrete creator that instantiates {@link ConcreteProductA}.
 * Clients use this creator when they specifically want Product A,
 * while still depending only on the {@link Creator} interface.
 */
export class ConcreteCreatorA implements Creator {
  /**
   * Creates a new instance of {@link ConcreteProductA}.
   *
   * @returns A {@link ConcreteProductA} instance as a {@link Product}.
   */
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

/**
 * Concrete creator that instantiates {@link ConcreteProductB}.
 * Clients use this creator when they specifically want Product B,
 * while still depending only on the {@link Creator} interface.
 */
export class ConcreteCreatorB implements Creator {
  /**
   * Creates a new instance of {@link ConcreteProductB}.
   *
   * @returns A {@link ConcreteProductB} instance as a {@link Product}.
   */
  createProduct(): Product {
    return new ConcreteProductB();
  }
}
