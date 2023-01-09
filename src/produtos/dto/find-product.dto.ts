import { IsNumberString } from 'class-validator';

export class FindProductDTO {
  @IsNumberString(undefined, { message: 'O ID informado não é válido.' })
  readonly id: string;
}
