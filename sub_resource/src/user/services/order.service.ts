import Order from "../models/order.model";

export default class OrderService {
  private orders: Order[] = [
    { id: 101, userId: 1, item: "Laptop", price: 1200 },
    { id: 102, userId: 1, item: "Mouse", price: 25 },
    { id: 201, userId: 2, item: "Keyboard", price: 75 },
  ];
  getOrdersByUserId(userId: number) {
    return this.orders.filter((order) => order.userId == userId);
  }
  getOrderById(orderId: number, userId: number) {
    return this.orders.find(
      (order) => order.id == orderId && order.userId == userId
    );
  }
}
