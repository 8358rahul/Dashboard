import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";

export default function AddAgentDialog() {
  return (
    <Dialog>
      <div className="flex justify-center">
        <DialogTrigger asChild>
          <Button variant="outline" className="w-32 h-12">
            + Add
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <p>This is the empty modal dialog for Add Agent.</p>
      </DialogContent>
    </Dialog>
  );
}
