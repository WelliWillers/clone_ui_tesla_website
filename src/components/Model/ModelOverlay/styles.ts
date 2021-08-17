import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin-top: -100vh;
`;