export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href: string;
    };
    car: {
      href: string;
    };
    owner: {
      href: string;
    };
  };
};

export type Car = { // front에서 시작(입력) -> 백엔드로 들어감(db) like dto
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
};

export type CarEntity = {
  car: Car;
  url: string;
}
