import OrderService from "../services/order.service";
import UserService from "../services/user.service";
import { Request, Response } from "express";
class UserController {
  private orderService: OrderService;
  constructor(service: OrderService) {
    this.orderService = service;
  }
  // ❌ Bad design : Récupération de la commande via query params
  getUserOrderBad = (req: Request, res: Response) => {
    const { userId, orderId } = req.query;
    if (!userId || !orderId) {
      res.status(400).json({ error: "Missing UserId or OrderId" });
      return;
    }
    const _orderId = parseInt(orderId as string);
    const _userId = parseInt(userId as string);
    const order = this.orderService.getOrderById(_orderId, _userId);
    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }
    res.status(200).json(order);
  };

  getUserOrders = (req: Request, res: Response) => {
    const { userId } = req.params;
    const _userId = parseInt(userId);
    const orders = this.orderService.getOrdersByUserId(_userId);
    res.json(orders);
  };
  getUserOrder = (req: Request, res: Response) => {
    const { userId, orderId } = req.params;
    const _userId = parseInt(userId);
    const _orderId = parseInt(orderId);
    const order = this.orderService.getOrderById(_orderId, _userId);
    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }
    res.json(order);
  };
}
export default new UserController(new OrderService());
