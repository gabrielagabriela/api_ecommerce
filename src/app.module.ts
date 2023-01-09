import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ProdutosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
