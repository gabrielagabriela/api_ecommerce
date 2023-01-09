import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { FindProductDTO } from '../dto/find-product.dto';
import { ProductEntity } from '../entities/produto.entity';
import { ProdutosService } from '../service/produtos.service';
import { Response } from 'express';
import { CriarProdutoDTO } from '../dto/criar-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Post()
  async criar(@Body() produto: CriarProdutoDTO): Promise<ProductEntity> {
    try {
      return await this.produtosService.insert(produto);
    } catch (err) {
      if (err.code == 23505)
        throw new HttpException({ reason: err.detail }, HttpStatus.CONFLICT);
      throw new HttpException({ reason: err }, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async obterTodos(): Promise<ProductEntity[]> {
    try {
      return await this.produtosService.findAll();
    } catch (err) {
      throw new HttpException({ reason: err?.detail }, HttpStatus.BAD_REQUEST);
    }
  }
  @Get(':id')
  async obterUm(
    @Param() params: FindProductDTO,
    @Res() response: Response,
  ): Promise<ProductEntity> {
    try {
      const founded = await this.produtosService.findOne(params);
      if (founded) {
        response.status(HttpStatus.OK).send(founded);
        return founded;
      }
      response
        .status(HttpStatus.OK)
        .send(`Nenhum usuário encontrado com o ID ${params.id}`);
    } catch (error) {
      throw new HttpException({ reason: error.detail }, HttpStatus.BAD_REQUEST);
    }
  }
}
