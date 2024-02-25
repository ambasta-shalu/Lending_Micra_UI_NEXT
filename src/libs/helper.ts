export function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
}

export function formatAmountInMillion(amount: number) {
    const million = 1000000;
    if (amount < 1000000) {
        return amount.toLocaleString(undefined, { maximumFractionDigits: 2 });

    }
    const formattedAmount = (amount / million).toLocaleString(undefined, { maximumFractionDigits: 2 });
    return formattedAmount + ' Million';
}

export function formatAmount(amount: number) {
    const options = { style: 'currency', currency: 'USD' };
    const formattedAmount = amount.toLocaleString('en-US', options);
    return formattedAmount
}