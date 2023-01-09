import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CriarProdutoDTO } from '../dto/criar-produto.dto';
import { FindProductDTO } from '../dto/find-product.dto';
import { ProductEntity } from '../entities/produto.entity';
import { CategoriaProduto } from '../utils/CategoriaProduto.enum';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {}

  async insert(product: CriarProdutoDTO): Promise<ProductEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.productRepository.insert({
          ...product,
          category: parseInt(CategoriaProduto[product.category]),
        });
        const { id } = response.generatedMaps[0];
        let created = new ProductEntity();
        created = { ...product, id: id };
        resolve(created);
      } catch (error) {
        console.log('-- insert error --');
        console.log(error);
        reject({
          code: error.code,
          detail: error.detail,
        });
      }
    });
  }

  async findAll(): Promise<ProductEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await this.productRepository.find());
      } catch (error) {
        reject(error);
      }
    });
  }
  async findOne(param: FindProductDTO): Promise<ProductEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await this.productRepository.findOneBy(param));
      } catch (error) {
        reject(error);
      }
    });
  }
}
