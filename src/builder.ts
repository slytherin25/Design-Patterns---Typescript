/**
 * Product class representing a Car.
 */
export class Car {
    engine: string | null = null;
    tire: string | null = null;
    maker: string | null = null;
}

/**
 * Product class representing a Truck.
 */
export class Truck {
    engine: string | null = null;
    tire: string | null = null;
    maker: string | null = null;
}

/**
 * The Builder interface defines the steps required to construct
 * parts of a complex object. Concrete builders implement these steps.
 */
export interface Builder {    
    reset(): void;
    buildEngine(): Builder;
    buildTire(): Builder;
    buildMaker(): Builder;
}

/**
 * Concrete builder used to construct Car objects.
 */
export class CarBuilder implements Builder {

    private car: Car;

    constructor() {
        this.car = new Car();
    }

    /**
     * Resets the builder to produce a fresh Car.
     */
    reset(): void {
        this.car = new Car();
    }

    buildEngine(): Builder {
        this.car.engine = "Car Engine";
        return this;
    }

    buildTire(): Builder {
        this.car.tire = "Car Tire";
        return this;
    }

    buildMaker(): Builder {
        this.car.maker = "Car Maker";
        return this;
    }

    /**
     * Returns the completed Car product.
     */
    getResult(): Car {
        return this.car;
    }
}

/**
 * Concrete builder used to construct Truck objects.
 */
export class TruckBuilder implements Builder {

    private truck: Truck;

    constructor() {
        this.truck = new Truck();
    }

    /**
     * Resets the builder to produce a fresh Truck.
     */
    reset(): void {
        this.truck = new Truck();
    }

    buildEngine(): Builder {
        this.truck.engine = "Truck Engine";
        return this;
    }

    buildTire(): Builder {
        this.truck.tire = "Truck Tire";
        return this;
    }

    buildMaker(): Builder {
        this.truck.maker = "Truck Maker";
        return this;
    }

    /**
     * Returns the completed Truck product.
     */
    getResult(): Truck {
        return this.truck;
    }
}

/**
 * Director defines the order in which construction steps are executed.
 * It ensures that complex objects are created consistently.
 */
export class Director {

    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    /**
     * Allows the Director to switch builders at runtime.
     */
    changeBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * Builds a complete product using the standard sequence of steps.
     */
    make(): void {
        this.builder.reset();
        this.builder.buildEngine();
        this.builder.buildTire();
        this.builder.buildMaker();
    }
}
