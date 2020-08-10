
export class Unit_Amount {
  currency_code: string = '';
  value: string = '';
}

export class Paypal {
  public name: string = '';
  public quantity: string = '';
  public category: string = '';
  public unit_amount: Unit_Amount
}
