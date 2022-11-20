import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor (@InjectRepository(Product) private repository: Repository<Product>) {}

  create(createProductDto: CreateProductDto) {
    return this.repository.save(createProductDto);
  }

  findAll() {
    return this.repository.find({})
  }

  findOne(id: number) {
    return this.repository.find({})
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto)
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
