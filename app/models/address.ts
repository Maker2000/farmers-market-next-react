class Address {
  address1!: string;
  address2?: string;
  city!: string;
  state!: string;
  country!: string;
  zip!: string;
  public toString = (): string => {
    return `${this.address1} \n${this.address2},\n${this.city}\n${this.state} ${this.zip}`;
  };
}
interface CreateAddressDto {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}
