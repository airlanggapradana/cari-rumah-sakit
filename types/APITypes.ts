export type Province = {
  id: string;
  name: string;
};

export type City = {
  id: string;
  name: string;
};

export type Hospital = {
  id: string;
  name: string;
  address: string;
  phone: string;
  available_beds: {
    available: number;
    bed_class: string;
    room_name: string;
    info: string;
  }[];
};
