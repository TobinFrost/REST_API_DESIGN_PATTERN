import UserService from "../services/user.service";
import { Request, Response } from "express";
class UserController {
  private userService: UserService;
  constructor(service: UserService) {
    this.userService = service;
  }
  all = (req: Request, res: Response) => {
    const users = this.userService.all();
    res.status(200).json(users);
  };
  add = (req: Request, res: Response) => {
    const newUser = {
      id: this.userService.all().length + 1,
      name: req.body.name,
    };
    this.userService.add(newUser);
    res.status(201).json(newUser);
  };
  delete = (req: Request, res: Response) => {
    const _id = parseInt(req.params.id);
    const result = this.userService.delete(_id);
    if (!result) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(204).send();
  };
}

export default new UserController(new UserService());
