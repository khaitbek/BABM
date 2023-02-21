import { CardGrid, CardGridImage, CardGridItem } from '../CardGrid/CardGrid';
import { GridSection } from '../GridSection/GridSection';
// import news from '../../data/news';
import {
	StyledPostTime,
	StyledPostTimeWrapper,
	StyledPostTitle,
} from './news-styles';
import { TextContainer } from '../TextContainer/TextContainer';
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import { newsApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function News() {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const { data: news, isLoading, error } = useQuery({
		queryKey: ["news"],
		queryFn: async () => {
			return await (await newsApi.getAll()).data.content;
		},
		staleTime: 50000
	});
	if (isLoading) return <Loader />
	if (error) return <h2>Hozirda yangiliklar mavjud emas...</h2>
	return (
		<GridSection
			paddingTop='64px'
			title={t("news.news_title")}
			subtitle={t("news.news_text")}>
			<CardGrid gap='24px' itemWidth='368px' rows={3}>
				{news.map((post) => (
					<CardGridItem onClick={() => {
						navigate(`news/${post.id}`, {
							state: post
						})
					}} key={crypto.randomUUID()}>
						<CardGridImage
							src={post.image}
							width={368}
							height={200}
							description={post.title}
						/>
						<TextContainer maxWidth={'100%'} marginStart={'15px'}>
							<StyledPostTimeWrapper>
								<StyledPostTime dateTime={`2023.01.18`}>
									{`${new Date().getHours()}:${new Date().getMinutes()}`} | {`2023.01.18`}
								</StyledPostTime>
							</StyledPostTimeWrapper>
							<StyledPostTitle>{i18n.language === "uz" ? post.titleUz : post.titleRu}</StyledPostTitle>
						</TextContainer>
					</CardGridItem>
				))}
			</CardGrid>
		</GridSection>
	);
}
