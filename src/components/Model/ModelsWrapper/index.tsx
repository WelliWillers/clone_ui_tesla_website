import { ReactNode, useCallback, useRef, useState } from 'react';
import ModelOverlay from '../ModelOverlay';
import ModelsContext, { CarModel } from '../ModelsContext';

import * as Styled from './styles';


interface ModelsWrapperProps {
  children: ReactNode;
} 

function ModelsWrapper({ children }: ModelsWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, []);

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null;
  }, [registeredModels]);

  return (
    <ModelsContext.Provider 
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }
    }>
      <Styled.Container ref={wrapperRef} >

        <Styled.OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>

          ))}
        </Styled.OverlaysRoot>


        {children}
      </Styled.Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
