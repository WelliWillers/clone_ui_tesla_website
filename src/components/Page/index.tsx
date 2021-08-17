//components
import DefaultOverlayContent from '../DefaultOverlayContent';
import ModelSection from '../Model/ModelSection';
import ModelsWrapper from '../Model/ModelsWrapper';
import UniqueOverlay from '../UniqueOverlay';

import * as Styled from './styles';


function Page() {
  return (
    <Styled.Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Tree',
            'Model For',
            'Model Five',
            'Model Six', 
            'Model Seven'
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label={modelName}
                  description="Order online for Delivery"
                />
              }
            />
          ))}
          
        </div>

        <Styled.Spacer />

        <UniqueOverlay />

      </ModelsWrapper>
    </Styled.Container>
  );
};

export default Page;
