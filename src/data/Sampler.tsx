import LetterFrequencies from "./LetterFrequencies";


class WeightedSampler {
    total: number;
    elements: string[];
    cweights: number[];

    constructor(elements: string[], weights: number[]) {
      this.total = 0;
      this.elements = Array.from(elements);
      this.cweights = weights.map(weight => this.total += weight);
    }

    get() {
      let random = Math.random() * this.total;
      return this.elements.find((element, index) => random < this.cweights[index]);
    }

}

const letters: string[] = [];
const weights: number[] = [];

let letter: string;

for (letter in LetterFrequencies) {
    letters.push(letter);
    weights.push(LetterFrequencies[letter])
}

const weightedSampler = new WeightedSampler(letters, weights);


export default weightedSampler;