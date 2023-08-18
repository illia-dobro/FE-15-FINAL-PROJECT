import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import ProductCard from "../productCard/ProductCard";
import useDeviceType from "../../helpers/getDeviceType";

function ProductSlider({ settings, products }) {
	const { isDesktop } = useDeviceType();
	const isSwipeable = isDesktop ? false : true;

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			partialVisibilityGutter: 30,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			partialVisibilityGutter: 20,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			partialVisibilityGutter: 20,
		},
	};
	const productSliderSettings = {
		responsive: responsive,
		swipeable: isSwipeable,
		draggable: isSwipeable,
		renderButtonGroupOutside: true,
		showDots: false,
		arrows: false,
		partialVisible: true
	};
	return (
		<Carousel {...productSliderSettings} {...settings}>
			{products.map((product) => (
				<ProductCard key={product.itemNo} product={product} />
			))}
		</Carousel>
	);
}
ProductSlider.propTypes = {
	settings: PropTypes.object,
};
export default ProductSlider;
