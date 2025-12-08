export default class Singleton {
    private static instance?: Singleton;

    private someString: string = "";

    private constructor() {}

    static getInstance(): Singleton {
        return this.instance ??= new Singleton();
    }

    getSomeString(): string {
        return this.someString;
    }

    setSomeString(value: string): void {
        this.someString = value;
    }
}
