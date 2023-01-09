import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoriaProduto } from '../utils/CategoriaProduto.enum';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column('float')
  price: number;

  @Column()
  description: string;

  @Column('int')
  category: CategoriaProduto; //enum que esta em utils

  @Column()
  available: boolean;
}
