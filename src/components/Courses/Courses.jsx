import { StyledCourseBody, StyledCourseText, StyledCourseTitle } from "./courses.styles";
import { StyledContainer } from "../../styles/global";
import { GridSection } from "../GridSection/GridSection";
import { CardGrid, CardGridImage, CardGridItem } from "../CardGrid/CardGrid";
import { courses } from "../../data/courses";



export function Courses() {
    return (
        <GridSection paddingTop="171px" title="-To’garaklar-" subtitle="Maktabimizdagi mavjud to’garaklar bilan tanishing">
            <CardGrid gap="15px" itemWidth="300px">
                {courses.map((course, index) => (
                    <CardGridItem key={crypto.randomUUID()} colSpan={course.colSpan}>
                        <CardGridImage src={course.image} width={300} height={250} />
                        <CourseBody title={course.title} body={course.body} id={index + 1} />
                    </CardGridItem>
                ))}
            </CardGrid>
        </GridSection>
    )
}

export function CourseBody({ title, body, id }) {
    return <StyledCourseBody id={id}>
        <StyledCourseTitle>
            {title}
        </StyledCourseTitle>
        <StyledCourseText>
            {body}
        </StyledCourseText>
    </StyledCourseBody>
}