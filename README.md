# Design Patterns Documentation

## Singleton Pattern

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.

### When to Use

- When exactly one object is needed to coordinate actions across the system.
- When managing shared resources (configuration, logging, etc.).

### Key Characteristics

- Private constructor.
- Static instance accessor.
- Lazy or eager initialization.

---

## Factory Method Pattern

The Factory Method pattern defines an interface for creating objects but lets subclasses decide which class to instantiate.

### When to Use

- When a class doesn't know in advance what objects it must create.
- When creating objects should be delegated to subclasses.
- When you want to avoid `new` scattered throughout your code.

### Key Characteristics

- Product interface.
- Concrete product implementations.
- Creator interface with factory method.
- Concrete creators override the creation logic.

---

## Builder Pattern

The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different types of objects.

### When to Use

- When an object requires multiple steps to build.
- When you want different representations (e.g., Car vs. Truck) built using the same step sequence.
- When telescoping constructors or overly large constructor parameter lists become unwieldy.

### Key Characteristics

- Builder interface defines construction steps.
- Concrete builders (e.g., `CarBuilder`, `TruckBuilder`) implement those steps.
- Director orchestrates the building process in a consistent order.
- Builders expose `getResult()` to retrieve the final constructed product.

---

## Strategy Pattern

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.

### When to Use

- When you have multiple algorithms that can vary independently.
- To replace conditional logic (`if/else` or `switch`) that selects behavior.
- To allow runtime swapping of behaviors.

### Key Characteristics

- Strategy interface.
- Concrete strategy classes.
- Context class uses a strategy.

---

## Observer Pattern

The Observer pattern defines a one-to-many relationship where dependents are automatically updated when the subject changes.

### When to Use

- When changes to one object require updates to others.
- For event-driven systems.
- To decouple subjects from observers.

### Key Characteristics

- Subject maintains a list of observers.
- Observers subscribe/unsubscribe.
- Subject notifies observers on state changes.

---

## Decorator Pattern

The Decorator pattern attaches additional responsibilities to an object dynamically. It provides a flexible alternative to subclassing.

### When to Use

- To add features without modifying existing code.
- To combine features dynamically.
- When inheritance becomes too rigid or complex.

### Key Characteristics

- Component interface.
- Concrete component.
- Decorator wraps components.
- Multiple decorators can layer behavior.

---

## Prototype Pattern

The Prototype pattern creates new objects by cloning existing instances instead of instantiating classes directly. This allows code to create objects without depending on their concrete constructors or internal initialization details.

### When to Use

- When object creation is costly, and duplicating an existing instance is more efficient.
- When you want to avoid exposing complex construction logic.
- When objects must be created at runtime without knowing their exact type.
- When you need to preserve the configuration of an existing object and reuse it as a template.

### Key Characteristics

- Prototype interface declares a `clone()` method.
- Concrete prototypes implement cloning behavior.
- Cloning can be shallow or deep depending on the object's complexity.
- Subclasses can refine clone behavior without modifying client code.
- Construction details remain encapsulated inside the prototype object.
