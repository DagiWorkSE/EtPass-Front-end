import { useState, useEffect, Fragment } from "react";
import { FormItem } from "../FormItem";

export const LostOrStolenPassportRenewal = (props) => {

  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
  
    if (Object.keys(answers).length > 1) {
   
      props.onPageUpdate(answers.index, answers);
     
      setAnswers({ index: props.step })
    } else {
     
      setAnswers({ index: props.step })
    } 
  }, [props.step])

  const updateAnswers = (value, category) => {
    setAnswers({...answers, [category]: value});
  }
console.log("ere wegen")


  return (
<>
    {/* <div className="mt-2 ms-5" ><h3>Renew Passport - Lost or stolen i don’t have the photo</h3></div> */}
      <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <FormItem key={`${index}_${item.label}`}  item={item} onChange={updateAnswers} answer={props.pagesAnswers[props.step] ? props.pagesAnswers[props.step][item.value] : null} />
          )
        })
      }
    </div>
    </>

  )
}
