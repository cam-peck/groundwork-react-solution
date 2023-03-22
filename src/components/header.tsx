import React from "react";

export default function Header() {
  return (
    <header className="mt-4 mb-4">
      <h1 className="text-xl">React Recursive Tree Challenge</h1>
      <hr className="border mt-2 border-blue-500 mb-4" />
      <div>
        <ul className="mb-2">Notes!</ul>
        <li>Type in an input box and press enter to add children.</li>
        <li>All children are drag/droppable within their nested level.</li>
      </div>
    </header>
  )
}
