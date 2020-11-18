import { motion } from 'framer-motion';
import colors from '../../styles/colors';

const Arrow = ({ fillColor = colors.white, ...props }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 101 57"
    {...props}
  >
    <path
      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
      fill={fillColor}
      fillRule="evenodd"
    ></path>
  </motion.svg>
);

export default Arrow;
