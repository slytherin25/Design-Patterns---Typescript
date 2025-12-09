export default class Singleton {
    private static instance: Singleton | null = null;

    private someString = "";

    private constructor() {}

    static getInstance(): Singleton {
        if (Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public getSomeString(): string {
        return this.someString;
    }

    public setSomeString(value: string): void {
        this.someString = value;
    }
}
