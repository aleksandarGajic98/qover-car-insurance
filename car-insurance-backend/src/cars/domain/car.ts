export class Car {
  id: string;
  name: string;
  globalPrice: number;
  universalPercentage: number;
}

export type CarWithInitialPrice = Car & { initialPrice: number };
