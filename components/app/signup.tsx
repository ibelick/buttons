import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Signup = () => {
  return (
    <div>
      <h2>Sign up</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        voluptatum, molestiae, quia, quas voluptas quibusdam quos dolorum
        voluptatem quidem quae doloribus. Quisquam, voluptas. Quos, quod
        voluptates. Quisquam, voluptas. Quos, quod voluptates.
      </p>
      <label htmlFor="email">Email</label>
      <Input placeholder="Email" id="email" />
      <Button>signup</Button>
    </div>
  );
};
