// factory-method.ts

export interface Product {
  doStuff(): void;
}

export interface Creator {
  createProduct(): Product;
}

// Concrete Product A
export class ConcreteProductA implements Product {
  doStuff(): void {
    console.log("ConcreteProductA doing work...");
  }
}

// Concrete Product B
export class ConcreteProductB implements Product {
  doStuff(): void {
    console.log("ConcreteProductB doing work...");
  }
}

// Concrete Creator A — creates Product A
export class ConcreteCreatorA implements Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

// Concrete Creator B — creates Product B
export class ConcreteCreatorB implements Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}
