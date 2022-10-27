import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) {}
  create(createCarDto: CreateCarDto) {
    return this.prisma.car.create({ data: createCarDto });
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: string) {
    return this.prisma.car.findUnique({ where: { id: id} });
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.prisma.car.update({
      where: { id: id },
      data: updateCarDto,
    });
  }

  remove(id: string) {
    return this.prisma.car.delete({ where: { id: id } });
  }
}
