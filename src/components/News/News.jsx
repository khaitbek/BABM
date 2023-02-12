import { CardGrid, CardGridImage, CardGridItem } from '../CardGrid/CardGrid';
import { GridSection } from '../GridSection/GridSection';
import news from '../../data/news';
import {
	StyledPostTime,
	StyledPostTimeWrapper,
	StyledPostTitle,
} from './news-styles';
import { TextContainer } from '../TextContainer/TextContainer';

export function News() {
	return (
		<GridSection
			paddingTop='64px'
			title='-Yangiliklar-'
			subtitle='So’ngi yangilik, e’lon va habarlar'>
			<CardGrid gap='24px' itemWidth='368px' rows={3}>
				{news.map((post) => (
					<CardGridItem key={crypto.randomUUID()}>
						<CardGridImage
							src={post.image}
							width={368}
							height={200}
							description={post.title}
						/>
						<TextContainer maxWidth={'100%'} marginStart={'15px'}>
							<StyledPostTimeWrapper>
								<StyledPostTime dateTime={post.date}>
									{post.time} | {post.date}
								</StyledPostTime>
							</StyledPostTimeWrapper>
							<StyledPostTitle>{post.title}</StyledPostTitle>
						</TextContainer>
					</CardGridItem>
				))}
			</CardGrid>
		</GridSection>
	);
}
