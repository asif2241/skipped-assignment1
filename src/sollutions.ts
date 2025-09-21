function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// ------------------------------------------

function filterByRating(items: { title: string, rating: number }[]): { title: string, rating: number }[] {
    return items.filter(item => item.rating >= 4)
}

// ------------------------------------------



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat()
}

// ------------------------------------------


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `Make: ${this.make}, year: ${this.year}`
    }
}


class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model
    }

    public getModel(): string {
        return `Model: ${this.model}`
    }
}

// ------------------------------------------


function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2
}

// ------------------------------------------


interface IProduct {
    name: string,
    price: number
}

function getMostExpensiveProduct(products: IProduct[]): IProduct | null {
    return products.length === 0 ? null : products.reduce((prev, curr) => (curr.price > prev.price ? curr : prev))
}

// ------------------------------------------



enum Day {
    Monday,    // 0
    Tuesday,   // 1
    Wednesday, // 2
    Thursday,  // 3
    Friday,    // 4
    Saturday,  // 5
    Sunday     // 6
}


function getDayType(day: Day): string {
    if (day >= Day.Monday && day <= Day.Friday) {
        return "Weekday";
    } else {
        return "Weekend";
    }
}

// ------------------------------------------


async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    return new Promise((resolve) => {
        setTimeout(() => resolve(n * n), 1000);
    });
}
