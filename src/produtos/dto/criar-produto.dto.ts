import { IsNotEmpty, IsString } from 'class-validator';
import { CategoriaProduto } from '../utils/CategoriaProduto.enum';

export class CriarProdutoDTO {
  @IsString({ message: 'nome string' })
  @IsNotEmpty({ message: 'nome vazio' })
  readonly name: string;
  readonly price: number;
  @IsString({ message: 'code string' })
  @IsNotEmpty({ message: 'code vazio' })
  readonly description: string;
  readonly available: boolean;
  readonly category: CategoriaProduto;
}
