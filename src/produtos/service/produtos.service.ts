import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FindProductDTO } from '../dto/find-product.dto';
import { ProductEntity } from '../entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {}

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
