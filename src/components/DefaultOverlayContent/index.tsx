
import * as Styled from './styles';

interface DefaultOverlayContentProps {
  label: string;
  description: string;
}

function DefaultOverlayContent({ label, description }: DefaultOverlayContentProps) {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Styled.Heading>

      <Styled.Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Styled.Buttons>

    </Styled.Container>
  );
};

export default DefaultOverlayContent;
