import { Dimensions } from 'react-native';

const BASE_WIDTH = 360;
const { width, height } = Dimensions.get("window");



export function calcWidth(size) {
	const { width } = Dimensions.get('window');
	return size * (width / BASE_WIDTH);
}

export const screenSize = {
	width, height
};