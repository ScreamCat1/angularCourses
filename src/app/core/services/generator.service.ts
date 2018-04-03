export class GeneratorService {
  public randomSring = '';

  private chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';

  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.randomSring += this.chars[Math.round(Math.random() * this.chars.length)];
    }
   }
}

export let GeneratorFactory = () => {
  return new GeneratorService(Math.round(Math.random() * 10));
};
