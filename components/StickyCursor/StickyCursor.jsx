import React from 'react';
import useCursorStyle from '../../hooks/useCursorStyle';

const StickyCursor = ({ children: childrenProp, sticky = true }) => {
  const childRef = React.useRef(null);
  const { lockCursorPosition } = useCursorStyle();

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const { onMouseEnter, onMouseLeave } = child.props;

    const handleMouseEnter = event => {
      if (!childRef.current) return;

      const position = childRef.current.getBoundingClientRect();

      const x = position.width / 2 + position.left;
      const y = position.height / 2 + position.top;
      lockCursorPosition({ x, y });

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    };

    const handleMouseLeave = event => {
      if (!childRef.current) return;

      lockCursorPosition(null);

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };

    const handleRef = node => {
      // Keep your own reference
      childRef.current = node;

      // Call the original ref, if any
      const { ref } = child;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref !== null) {
        ref.current = node;
      }
    };

    return React.cloneElement(child, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ref: handleRef,
    });
  });

  return sticky ? children : childrenProp;
};

export default React.memo(StickyCursor);
