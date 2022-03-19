export interface DriverData {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
  email: string;
}

export interface DriverDataResponse {
  results: Array<DriverData>;
}
