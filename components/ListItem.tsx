import React from "react";
import { ListItemProps } from "@/types";

const ListItem = ({
  iconClass,
  title,
  description,
  rightText,
  href,
  onClick,
}: ListItemProps) => {
  const formattedRightText =
    typeof rightText === "number"
      ? `${rightText < 0 ? "- " : "+ "}Rp ${new Intl.NumberFormat(
          "id-ID"
        ).format(Math.abs(rightText))}`
      : rightText;

  const textColorClass =
    typeof rightText === "number" && rightText >= 0
      ? "text-green-500"
      : "text-red-500";

  return (
    <a href={href} className="list-item" onClick={onClick}>
      {/* Left Section */}
      <div className="list-item-left">
        {iconClass && <span className={`list-item-icon ${iconClass}`}></span>}
        <div className="list-item-content">
          <span className="list-item-title">{title}</span>
          <span className="list-item-description">{description}</span>
        </div>
      </div>
      {/* Right Section */}
      <div className="list-item-right">
        <span className={`list-item-right-text ${textColorClass}`}>
          {formattedRightText}
        </span>
        <span className="list-item-right-icon i-material-symbols-chevron-right-rounded"></span>
      </div>
    </a>
  );
};

export default ListItem;
