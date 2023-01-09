import { Type } from 'class-transformer';
import { CarrinhoProdutoDTO } from 'src/produtos/dto/carrinho-produto.dto';

export class CarrinhoDTO {
  usuario: number;
  valor: number;
  @Type(() => CarrinhoDTO)
  produtos: CarrinhoProdutoDTO[];
}
