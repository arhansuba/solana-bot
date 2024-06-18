// Import your fonts here
import RobotoRegular from './fonts/Roboto-Regular.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';

// Define a type for your fonts if necessary
export type FontType = 'RobotoRegular' | 'RobotoBold';

// Define an object to map font names to their respective paths
const fonts: Record<FontType, string> = {
  RobotoRegular: RobotoRegular,
  RobotoBold: RobotoBold,
};

// Export the fonts object
export default fonts;
