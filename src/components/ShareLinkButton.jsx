"use client";
import { LinkIcon } from "@heroicons/react/20/solid";

import { useState } from "react";

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className="border gap-1 items-center flex p-2 rounded text-slate-500 text-sm my-1 hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon className="h-4 w-4" />
      {clicked ? "Link Copied " : "Share Link"}
    </button>
  );
};

export default ShareLinkButton;
