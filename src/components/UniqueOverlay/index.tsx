import { useTransform } from 'framer-motion';
import { ReactNode } from 'react';
import useWrapperScrool from '../Model/useWrapperScrool';

import * as Styled from './styles';


function UniqueOverlay() {
  const { scroolYProgress } = useWrapperScrool()

  const opacity = useTransform(scroolYProgress, [0.9, 1], [0, 1])

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Logo />
        <Styled.Burger />
      </Styled.Header>

      <Styled.Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💜</a>
          </li>
          <li>
            <a href="#">by Wellington Willers</a>
          </li>
        </ul>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default UniqueOverlay;
