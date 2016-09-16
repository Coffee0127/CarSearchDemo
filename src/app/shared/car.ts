export class Car {
    private _id: number;
    private _model: string;
    private _make: string;
    private _preview: string;
    private _description: string;
    private _price: number;
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }
    get make(): string {
        return this._make;
    }
    set make(value: string) {
        this._make = value;
    }
    get preview(): string {
        return this._preview;
    }
    set preview(value: string) {
        this._preview = value;
    }
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }
    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }
}
