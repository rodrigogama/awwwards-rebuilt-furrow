import React from 'react';
import { useMenuContext } from '../../context/menu';
import useCursorStyle from '../../hooks/useCursorStyle';
import StickyCursor from '../StickyCursor';
import { Button } from './styles';

const MenuButton = ({ sticky = true, title = '', ...props }, ref) => {
  const [, dispatch] = useMenuContext();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleOnToggle = React.useCallback(() => {
    dispatch({ type: 'TOGGLE_MENU' });
  }, [dispatch]);

  return (
    <StickyCursor sticky={sticky}>
      <Button
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
        onClick={handleOnToggle}
        ref={ref}
        {...props}
      >
        <span>{title}</span>
      </Button>
    </StickyCursor>
  );
};

export default React.memo(React.forwardRef(MenuButton));
