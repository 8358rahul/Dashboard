import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

export default function AddAgentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Agent</Button>
      </DialogTrigger>
      <DialogContent>
        <p>This is the empty modal dialog for Add Agent.</p>
      </DialogContent>
    </Dialog>
  );
}
