const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency :"USD", style: "currency"}
)

export function formatCurrency(number){
    return currencyFormatter.format(number)
}