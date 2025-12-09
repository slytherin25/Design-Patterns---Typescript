/**
 * Subscriber interface that all observers must implement.
 */
export interface Subscriber {
  update(publisher: Publisher): void;
}

/**
 * Publisher (subject) that manages subscribers and notifies them of changes.
 */
export class Publisher {
  private subscribers: Subscriber[] = [];
  private mainState = "";

  /**
   * Registers a new subscriber.
   */
  subscribe(subscriber: Subscriber): void {
    if (!this.subscribers.includes(subscriber)) {
      this.subscribers.push(subscriber);
    }
  }

  /**
   * Unregisters an existing subscriber.
   */
  unsubscribe(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  /**
   * Notifies all subscribers about a state change.
   */
  notifySubscribers(): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(this);
    }
  }

  /**
   * Example of business logic that changes internal state
   * and then notifies subscribers.
   */
  mainBusinessLogic(): void {
    this.mainState = `Updated at ${new Date().toISOString()}`;
    console.log(`Publisher: mainState changed to "${this.mainState}"`);
    this.notifySubscribers();
  }

  /**
   * Exposes the current state to subscribers.
   */
  getState(): string {
    return this.mainState;
  }
}

/**
 * A concrete subscriber that reacts to publisher updates.
 */
export class ConcreteSubscriberA implements Subscriber {
  update(publisher: Publisher): void {
    console.log(
      `[ConcreteSubscriberA] Notified. Publisher state: ${publisher.getState()}`
    );
  }
}

/**
 * Another concrete subscriber with different reaction behavior.
 */
export class ConcreteSubscriberB implements Subscriber {
  update(publisher: Publisher): void {
    console.log(
      `[ConcreteSubscriberB] Received update. Current state: ${publisher.getState()}`
    );
  }
}
