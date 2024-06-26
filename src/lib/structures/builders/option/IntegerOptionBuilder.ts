import { OptionBuilder } from "./OptionBuilder.js";
import { ApplicationCommand, ApplicationCommandOptionType } from "lilybird";

export class IntegerOptionBuilder extends OptionBuilder {
  #data: ApplicationCommand.Option.NumericStructure;

  override get data(): ApplicationCommand.Option.NumericStructure {
    return this.#data as Readonly<ApplicationCommand.Option.NumericStructure>;
  }
  
  constructor(
    data: Partial<Omit<ApplicationCommand.Option.ChoiceStructure, "type">> = {},
  ) {
    super({
      ...data,
      type: ApplicationCommandOptionType.INTEGER,
    } as ApplicationCommand.Option.NumericStructure);
    this.#data = super.data as ApplicationCommand.Option.NumericStructure;
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
