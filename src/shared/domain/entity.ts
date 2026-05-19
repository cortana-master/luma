export abstract class Entity<T> {
  protected readonly _id: string
  protected _props: T

  constructor(props: T, id?: string) {
    this._id = id ?? crypto.randomUUID()
    this._props = props
  }

  get id(): string {
    return this._id
  }

  equals(entity: Entity<T>): boolean {
    return this._id === entity._id
  }

  toJSON(): T & { id: string } {
    return {
      id: this._id,
      ...this._props,
    }
  }
}
