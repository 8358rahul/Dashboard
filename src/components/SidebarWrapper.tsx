"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-full bg-background shadow-md hover:bg-muted transition"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6 text-foreground" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-64 h-screen z-40 bg-background border-r">
        <Sidebar />
      </aside>

      {/* Mobile overlay and sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}>
        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-in sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
              className="text-muted-foreground hover:text-foreground transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <Sidebar />
        </aside>
      </div>
    </>
  );
}
