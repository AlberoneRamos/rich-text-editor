import React from 'react';
import { useSlate } from 'slate-react';
import classNames from 'classnames';
import './Button.scss';
import { isMarkActive, toggleMark } from 'utils/slateUtils';

type Props = {
  format: 'string',
  children: React$Element<any>
};

const MarkButton = React.memo(({ format, children }: Props) => {
  const editor = useSlate();
  return (
    <button
      className={classNames('btn btn-link', {
        active: isMarkActive(editor, format)
      })}
      onClick={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {children}
    </button>
  );
}, (prevProps, nextProps) => prevProps.format === nextProps.format);

export default MarkButton;
