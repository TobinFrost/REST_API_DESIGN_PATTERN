import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
  userService: UserService;
  constructor(service: UserService) {
    this.userService = service;
  }

  desactivateAccountBadWay = (req: Request, res: Response) => {
    const { userId } = req.params;
    this.userService.desactivate(userId);
    res.status(200).json({
      message: `User Account ${userId} desactivated successfully (BAD design)`,
    });
  };
  desactivateAccountGoodWay = (req: Request, res: Response) => {
    const { userId } = req.params;
    this.userService.desactivate(userId);
    res
      .status(201)
      .json({ message: `User Account ${userId} desactivation recorded` });
  };
}

export default new UserController(new UserService());
