import User from "../models/user.model";

class UserService {
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

  all() {
    return this.users;
  }
  add(new_user: User) {
    this.users.push(new_user);
  }
  delete(id: number) {
    const index = this.users.findIndex((user) => user.id == id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return index;
    }
    return null;
  }
}

export default UserService;
