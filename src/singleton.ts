/**
 * Represents a globally accessible, lazily instantiated Singleton.
 * 
 * This class ensures only one instance of `Singleton` can exist
 * throughout the application lifecycle. The instance is created
 * on-demand when `getInstance()` is first invoked.
 */
export default class Singleton {
    /**
     * Holds the single instance of the `Singleton` class.
     * Lazily initialized upon first access via `getInstance()`.
     */
    private static instance: Singleton | null = null;

    /**
     * Example instance-level string value stored within the Singleton.
     */
    private someString = "";

    /**
     * Private constructor ensures the class cannot be instantiated
     * externally, enforcing the Singleton design pattern.
     */
    private constructor() {}

    /**
     * Retrieves the global Singleton instance.
     * If the instance does not yet exist, it is created.
     *
     * @returns {Singleton} The single shared `Singleton` instance.
     */
    static getInstance(): Singleton {
        if (Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    /**
     * Retrieves the current value of `someString`.
     *
     * @returns {string} The stored string value.
     */
    public getSomeString(): string {
        return this.someString;
    }

    /**
     * Updates the value of `someString`.
     *
     * @param {string} value - The new string value to store.
     */
    public setSomeString(value: string): void {
        this.someString = value;
    }
}
