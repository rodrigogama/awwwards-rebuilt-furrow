import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+1.902.417.0634"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +1.902.417.0634
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:info@furrow.studio"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            info@furrow.studio
          </a>
        </div>
        <address className="column contact-text">
          15 Camburhill Ct Unit C<br /> Charlottetown, PE C1E 0E2
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
