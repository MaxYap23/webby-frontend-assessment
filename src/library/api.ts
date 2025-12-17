export interface Country {
    name: { common: string };
    region: string;
    currencies: Record<string, { name: string; symbol: string }>;
    languages?: Record<string, string>;
}

export async function fetchCountries(): Promise<Country[]> {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,region,currencies,languages");
    if (!res.ok) {
        throw new Error("Failed to fetch countries");
    }

    return res.json();
}

