'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from './ui/dialog'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

const STATUS_OPTIONS = ['Active', 'Pending', 'Inactive']

export default function StatusFilterModal({ onApply,button }: { onApply: (statuses: string[]) => void,button: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  const handleCheckboxChange = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    )
  }

  const applyFilters = () => {
    onApply(selectedStatuses)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
          {button}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Filter by Status</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {STATUS_OPTIONS.map((status) => (
            <div key={status} className="flex items-center space-x-2">
              <Checkbox
                id={status}
                checked={selectedStatuses.includes(status)}
                onCheckedChange={() => handleCheckboxChange(status)}
              />
              <Label htmlFor={status}>{status}</Label>
            </div>
          ))}
        </div>

        <DialogFooter className="mt-4">
          <Button onClick={applyFilters}>Apply</Button>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
