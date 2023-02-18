import { GridSection } from '../GridSection';
import { CardGrid, CardGridImage, CardGridItem } from '../CardGrid/CardGrid';
import { StyledPartner, StyledPartnerTitle } from './partners.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import partnerApi from "../../api/partnerApi";
import Loader from "../Loader";
import { useQuery } from "@tanstack/react-query";
export function Partners() {

	const { data: partners, isLoading, error } = useQuery({
		queryKey: ["partners"],
		queryFn: async () => {
			return await (await partnerApi.getAll()).data;
		},
		retry: 0,
		staleTime: 50000
	});
	const ITEMS_PER_SLIDE = 5;
	const settings = {
		autoplay: true,
		infinite: true,
		autoplaySpeed: 0,
		slidesToScroll: 1,
		slidesToShow: partners?.length < ITEMS_PER_SLIDE ? partners.length : ITEMS_PER_SLIDE,
		arrows: false,
		cssEase: 'linear',
		speed: 5000,
		initialSlide: 1,
		draggable: false,
		gap: 4,
	};
	if (isLoading) return <Loader />
	if (error) return <h2>Hozirda hamkorlar mavjud emas...</h2>
	return (
		<GridSection title='-Hamkorlar-' subtitle='Bizning hamkorlar'>
			<Slider {...settings}>
				{partners.map((partner) => (
					console.log(partners.length),
					<CardGridItem key={crypto.randomUUID()} colSpan={1}>
						<StyledPartner>
							<CardGridImage
								src={partner.logo}
								width={100}
								height={51}
								description={partner.title}
							/>
								<StyledPartnerTitle href={partner.url} target="blank">{partner.titleUz}</StyledPartnerTitle>
						</StyledPartner>
					</CardGridItem>
				))}
			</Slider>
		</GridSection>
	);
}
