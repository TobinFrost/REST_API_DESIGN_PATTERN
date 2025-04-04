import User from "../models/user.model";

export default class UserService {
  private users: User[] = [
    {
      id: 1,
      name: "Donald",
    },
    {
      id: 2,
      name: "Mickey",
    },
    {
      id: 3,
      name: "Pluto",
    },
  ];
}
