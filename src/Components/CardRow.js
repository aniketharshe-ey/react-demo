import React from "react";

const CardRow = ({ row }) => {
  return (
    <p>
      {row?.isLink ? (
        <a href={row.link} target="_blank" rel="noreferrer">
          {row.title}
        </a>
      ) : (
        <span>{row.title}</span>
      )}
    </p>
  );
};

export default CardRow;
