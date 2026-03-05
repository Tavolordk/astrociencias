export class NonEmptyString {
    private constructor(private readonly value: string) { }

    static create(raw: string, fieldName = "value"): NonEmptyString {
        const v = (raw ?? "").trim();
        if (!v) throw new Error(`${fieldName} must not be empty`);
        return new NonEmptyString(v);
    }

    get(): string {
        return this.value;
    }
}