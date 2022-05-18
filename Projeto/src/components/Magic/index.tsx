import React , {useState} from "react";
import {Container,Card,ButtonGroup,Button} from 'react-bootstrap'
import Tabs from "../Tabs";
interface MagicProps {
    tabs_contents: Array<Type>;
  }
  interface Type {
    id: number;
    content: string;
  }
export default function Magic(props:MagicProps){

    const [currentTab,setCurrentTab]=useState(0)

    function changeTab(id:any){
      setCurrentTab(id)
       
        return 
    }

return(
    <Container>
    <Card>
<Card.Header>
<ButtonGroup aria-label="Basic example">
  {props.tabs_contents.map((txt,index)=>(<Button variant="primary" key={index} onClick={()=>{changeTab(txt.id)}}>{index}</Button>))}
  </ButtonGroup>
</Card.Header>
<Card.Body>
  
  <Card.Title></Card.Title>
  <Card.Text>
  <Tabs id={currentTab} content={props.tabs_contents[currentTab].content}/>
  </Card.Text>
 
</Card.Body>
</Card>
    </Container>
)

   
}