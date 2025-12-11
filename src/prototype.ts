/**
 * Generic prototype interface that models the ability to
 * create a copy of an object without exposing construction details.
 *
 * @typeParam T - Concrete type returned by the {@link clone} method.
 */
export interface Prototype<T> {
  /**
   * Creates and returns a copy of the current instance.
   *
   * @returns A new instance that is a copy of the current object.
   */
  clone(): T;
}

/**
 * Configuration object used to construct and clone {@link Truck} instances.
 *
 * Using a props interface keeps construction flexible and maintainable:
 * adding new fields requires only updates to this interface, not the constructor
 * signature or call sites.
 */
export interface TruckProps {
  /** Manufacturer name or brand of the truck. */
  maker: string;

  /** Engine model or description (e.g. "V8 diesel"). */
  engine: string;

  /** Number of tires installed on the truck. */
  tires: number;

  /** Payload capacity of the truck expressed in tons. */
  capacityTons: number;

  /**
   * Optional Vehicle Identification Number (VIN).
   * May be omitted for prototypes or test instances.
   */
  vin?: string;
}

/**
 * Concrete prototype implementation representing a generic truck.
 *
 * The class stores its configuration in a {@link TruckProps} object,
 * which is shallow-cloned during construction and when calling {@link clone}.
 * This encapsulation allows consumers to duplicate trucks without depending
 * on the concrete constructor details.
 */
export class Truck implements Prototype<Truck> {
  /**
   * Internal configuration for this truck instance.
   * Stored as a shallow copy of the props passed to the constructor.
   */
  protected props: TruckProps;

  /**
   * Creates a new {@link Truck} instance using the provided properties.
   *
   * @param props - Configuration values used to initialize the truck.
   *                The object is shallow-cloned to avoid external mutation.
   */
  constructor(props: TruckProps) {
    // Shallow copy helps ensure the internal state is not modified externally.
    this.props = { ...props };
  }

  /**
   * Creates a new {@link Truck} that is a copy of this instance.
   *
   * The underlying {@link TruckProps} object is shallow-cloned. If you store
   * nested objects inside {@link TruckProps}, consider extending this method
   * to perform a deep clone when necessary.
   *
   * @returns A new {@link Truck} with identical property values.
   */
  clone(): Truck {
    return new Truck({ ...this.props });
  }

  /**
   * Gets the manufacturer or brand of the truck.
   */
  get maker(): string {
    return this.props.maker;
  }

  /**
   * Gets the engine description for this truck.
   */
  get engine(): string {
    return this.props.engine;
  }

  /**
   * Gets the number of tires configured on this truck.
   */
  get tires(): number {
    return this.props.tires;
  }

  /**
   * Gets the payload capacity of this truck in tons.
   */
  get capacityTons(): number {
    return this.props.capacityTons;
  }

  /**
   * Gets the optional VIN associated with this truck, if defined.
   */
  get vin(): string | undefined {
    return this.props.vin;
  }

  /**
   * Produces a human-readable textual summary of the truck configuration.
   *
   * This method is intended for logging, debugging, or simple display usage.
   *
   * @returns A descriptive string representing the current truck instance.
   */
  describe(): string {
    return (
      `${this.props.maker} truck with ${this.props.engine} engine, ` +
      `${this.props.tires} tires, capacity ${this.props.capacityTons} tons`
    );
  }
}

/**
 * Extended configuration object for {@link FancyTruck} instances.
 *
 * This interface builds on {@link TruckProps} and adds fields specific
 * to more specialized or upgraded truck configurations.
 */
export interface FancyTruckProps extends TruckProps {
  /** Indicates whether the truck is equipped with an off-road package. */
  hasOffRoadPackage: boolean;

  /** Light output of the installed light bar, expressed in lumens. */
  lightBarLumens: number;
}

/**
 * Specialized truck prototype that extends {@link Truck} with additional
 * configuration fields for upgraded or off-road-oriented models.
 *
 * {@link FancyTruck} still adheres to the {@link Prototype} contract
 * and returns its concrete type from {@link clone}.
 */
export class FancyTruck extends Truck implements Prototype<FancyTruck> {
  /**
   * Internal configuration for this fancy truck instance.
   * This refines the base {@link Truck.props} type to {@link FancyTruckProps}.
   */
  protected props: FancyTruckProps;

  /**
   * Creates a new {@link FancyTruck} instance using the provided properties.
   *
   * @param props - Configuration values used to initialize the fancy truck.
   *                The object is shallow-cloned for encapsulation.
   */
  constructor(props: FancyTruckProps) {
    super(props);
    this.props = { ...props };
  }

  /**
   * Creates a new {@link FancyTruck} that is a copy of this instance.
   *
   * @returns A new {@link FancyTruck} with identical property values.
   */
  clone(): FancyTruck {
    return new FancyTruck({ ...this.props });
  }

  /**
   * Indicates whether this truck is configured with an off-road package.
   */
  get hasOffRoadPackage(): boolean {
    return this.props.hasOffRoadPackage;
  }

  /**
   * Gets the luminous output of the truck’s light bar in lumens.
   */
  get lightBarLumens(): number {
    return this.props.lightBarLumens;
  }

  /**
   * Produces a human-readable description of this fancy truck,
   * including its base characteristics and upgrade details.
   *
   * @returns A descriptive string representing the current fancy truck instance.
   */
  describe(): string {
    const base = super.describe();
    const offRoad = this.props.hasOffRoadPackage
      ? "with off-road package"
      : "standard trim";
    return `${base}, ${offRoad}, light bar: ${this.props.lightBarLumens} lm`;
  }
}
