import {
	StyledStatItem,
	StyledStatList,
	StyledStatText,
	StyledStatTitle,
	StyledStats,
} from './statistics.styles';
import { StyledContainer } from '../../styles/global';
import CountUp from 'react-countup';
import { stats } from '../../data/stats';
import { TextContainer } from '../TextContainer/TextContainer';
import { useTranslation } from "react-i18next";

export function Statistics() {
	const { t } = useTranslation();
	return (
		<StyledStats>
			<StyledContainer>
				<StyledStatList>
					{stats.map((stat, index) => (
						<StyledStatItem key={crypto.randomUUID()} image={stat.image}>
							<TextContainer maxWidth={'150px'}>
								<StyledStatTitle>
									<CountUp end={stat.count} decimals={stat.decimal} />
									{stat.suffix}
								</StyledStatTitle>
								<StyledStatText>{t(`stats.${index}`)}</StyledStatText>
							</TextContainer>
						</StyledStatItem>
					))}
				</StyledStatList>
			</StyledContainer>
		</StyledStats>
	);
}
