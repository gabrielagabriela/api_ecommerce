import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ProductEntity } from '../entities/produto.entity';
import { ProdutosService } from '../service/produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}
  @Get()
  async obterTodos(): Promise<ProductEntity[]> {
    try {
      return await this.produtosService.findAll();
    } catch (err) {
      throw new HttpException({ reason: err?.detail }, HttpStatus.BAD_REQUEST);
    }
  }
}
