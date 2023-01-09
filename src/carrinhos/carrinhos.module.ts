import { Type } from 'class-transformer';
import { IsArray } from 'class-validator';
import { CarrinhoProdutoDTO } from 'src/produtos/dto/carrinho-produto.dto';

export class CarrinhoDTO {
  usuario: number;
  valor: number;
  data: Date;
  @IsArray()
  @Type(() => CarrinhoDTO)
  produtos: CarrinhoProdutoDTO[];
}
