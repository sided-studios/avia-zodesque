import { OptionBuilder } from "./OptionBuilder.js";
import { ApplicationCommand, ApplicationCommandOptionType } from "lilybird";

export class NumberOptionBuilder extends OptionBuilder {
  #data: ApplicationCommand.Option.NumericStructure;
  constructor(
    data?: Partial<Omit<ApplicationCommand.Option.NumericStructure, "type">>,
  ) {
    super({
      ...data,
      type: ApplicationCommandOptionType.NUMBER,
    } as ApplicationCommand.Option.NumericStructure);
    this.#data = super.data as ApplicationCommand.Option.NumericStructure;
  }

  override get data() {
    return this.#data as Readonly<ApplicationCommand.Option.NumericStructure>;
  }

  setMaxValue(maxValue: number): this {
    this.#data.max_value = maxValue;
    return this;
  }

  setMinValue(minValue: number): this {
    this.#data.min_value = minValue;
    return this;
  }
}