export class Email {
    private constructor(private readonly value: string) { }

    static create(raw: string): Email {
        const v = (raw ?? "").trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) throw new Error("Invalid email");
        return new Email(v);
    }

    get(): string {
        return this.value;
    }
}