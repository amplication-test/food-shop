import { Injectable } from "@nestjs/common";
import { Order, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { OrderServiceBase } from "./base/order.service.base";

@Injectable()
export class OrderService extends OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async create<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<Order> {
    console.log("Notify here");
    return super.create(args);
  }
}
