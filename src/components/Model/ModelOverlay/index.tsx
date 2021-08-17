import { ReactNode, useCallback, useState, useLayoutEffect } from 'react';

import { CarModel } from '../ModelsContext';
import useWrapperScrool from '../useWrapperScrool';

import { useTransform } from 'framer-motion';

import { Container } from './styles';

interface ModelOverlayProps {
  model: CarModel;
  children: ReactNode;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetHeight' | 'offsetTop'>;

function ModelOverlay({ model, children }: ModelOverlayProps) {

  const { scroolY } = useWrapperScrool();

  const getSectionDimensions = useCallback(() => {
    return { 
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions;
  }, [model.sectionRef])

  const [dimensions, setDimensions]  = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  },[getSectionDimensions, model.sectionRef])
  

  const SectionScollProgress = useTransform(scroolY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight);

  const opacity = useTransform(
    SectionScollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0,1,1,0]
  );

  const pointerEvents = useTransform(opacity, value =>
    value > 0 ? 'auto' : 'none'
  )


  return <Container style={{opacity, pointerEvents}}>{children}</Container>;
};

export default ModelOverlay;
