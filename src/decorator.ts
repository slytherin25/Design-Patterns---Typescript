/**
 * The Component interface declares an operation that can be altered
 * by decorators.
 */
export interface Component {
  execute(): void;
}

/**
 * A concrete implementation of Component. This is the object that can be
 * wrapped by decorators to extend behavior at runtime.
 */
export class ConcreteComponent implements Component {
  execute(): void {
    console.log("[ConcreteComponent] Executing core behavior...");
  }
}

/**
 * The base Decorator class implements the same interface as the wrapped
 * component and forwards requests to it. Subclasses add extra behavior.
 */
export class BaseDecorator implements Component {
  protected readonly wrappee: Component;

  constructor(component: Component) {
    this.wrappee = component;
  }

  execute(): void {
    this.wrappee.execute();
  }

  /**
   * Additional behavior that decorators may override.
   */
  extra(): void {
    console.log("[BaseDecorator] Executing additional behavior...");
  }
}

/**
 * A concrete decorator that extends functionality of the wrappee.
 */
export class ConcreteDecorator extends BaseDecorator {
  execute(): void {
    console.log("[ConcreteDecorator] Before execution");
    super.execute();
    console.log("[ConcreteDecorator] After execution");
  }

  override extra(): void {
    console.log("[ConcreteDecorator] Executing specialized extra behavior...");
  }
}
