import React from "react";
import { useSlate } from "slate-react";
import classNames from "classnames";
import './Button.scss';
import { isBlockActive, toggleBlock } from "utils/slateUtils";

type Props = {
  format: 'string',
  children: React$Element<any>
};

const BlockButton = ({ format, children }: Props) => {
  const editor = useSlate();
  return (
    <button
      className={classNames("btn btn-link", {
        active: isBlockActive(editor, format)
      })}
      onClick={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {children}
    </button>
  );
};

export default React.memo(BlockButton);