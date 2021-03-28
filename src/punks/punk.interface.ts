export interface BasePunk {
  type: string;
  attributes: string[];
  image: string;
}

export interface Punk extends BasePunk {
  id: string;
}
