import { EducationProps } from "../types";



const Education = ( props: EducationProps ) => {
    return (
        <div>
            {props.degreeList.map((degree, idx)=> <li key={idx}>
                {degree.degree}
            </li>)}
        </div>
    );
  }
  
  export default Education;