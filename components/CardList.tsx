import React from "react";
import { CardListProps } from "@/types";

const CardList = ({ title, linkText, linkHref, children }: CardListProps) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <p className="card-header-title">{title}</p>
        <a
          href={linkHref}
          className="card-header-link"
          aria-label={`Link to ${linkText}`}
        >
          {linkText}
        </a>
      </div>
      {/* card content */}
      <div>{children}</div>
    </div>
  );
};

export default CardList;
