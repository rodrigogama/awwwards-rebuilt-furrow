import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            Great stories don’t just happen—
            <br />
            they need to be uncovered. And we dig deep to discover the great
            stories that lie just below the surface. Dirt under our fingernails
            and all.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
