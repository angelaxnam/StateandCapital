import React, { useState } from "react"
import { Button, Card, Form, ListGroup, Table} from "react-bootstrap";
import { useQuery } from "react-query";
import {Question} from "../models/question"
import  QuestionService  from "../service/question.service";
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form";


import questionService from "../service/question.service";



const Quiz = () => {
    const navigate = useNavigate();
    const methods = useForm();
    const [score, setScore] =useState(0);
    const [currentQuestion, setCurrentQuestion]=useState(0);
          
const {isLoading, isError, data} = useQuery(['questions'], () =>
QuestionService.getQuestions()
);
console.log(data, "data")
if (isLoading ) {
    return <h1>Is loading</h1>
  }
  if (isError || !data) {
    return <span>Error: Getting questions </span>
  }
  



//   const onSubmit = methods.handleSubmit(() => {
//     const question = {
//       id: question.id,
//       question: question.question,
//       correctAnswer: question.correctAnswer,
//       a: question.a,
//       b: question.b,
//       c: question.c,
//       d: question.d
//       scoreId: question.scoreId
//     };

//     QuestionService.putQuestion(Question).then(() => {
//       queryClient.invalidateQueries([
//         "questions",
//         Number(scoreId),
//       ]);
//       navigate(`/`);
//     });
//   });
      
    //   const onClick = async (e: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>) =>{
    //     if(e.target.value == data[key+1].correctAnswer){return count+=1}
    //   };  
//   const compareAnswers = async () =>{
//    if(question.correctAnswer == question)
//   }


const onSumbit = async () =>{
    navigate(`result`)
  }



return(
<>

<h4 className="text-end">Current Score: {score}</h4>  
{data.map((question: Question)=>{

return(
    <>
   
     {/* //<FormProvider {...methods}> */}
<Card key={question.id} className="mt-3 mb-3 square border border-primary border-1">
      <Card.Body>
        <Card.Title>Question {question.id}</Card.Title>
        <Card.Text>
        <Table striped hover key={question.id}>
        <thead>
          <tr>{question.question}</tr>
        </thead>
        <tbody>
          <tr>
         <td><Form.Check label={question.a}/></td>
            </tr>
            <tr>
            <td><Form.Check label={question.b}/></td>
            </tr>
            <tr>
            <td><Form.Check label={question.c}/></td>
            </tr>
            <tr>
            <td><Form.Check label={question.d}/></td>
            </tr>
        </tbody>
      </Table>
       </Card.Text>
      </Card.Body>
    </Card>
    {/* </FormProvider> */}
    </>
)
})}
<Button type="submit" size="lg" style={{ backgroundColor: "#F5821E", border: "#FFFFFF" }} className='my-3' onClick={onSumbit}>Submit!</Button>
</>
);
}
export default Quiz;