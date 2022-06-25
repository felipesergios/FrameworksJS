import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


export default function FormCards(){

    const [tabs_count,setTabs_count]=useState('')
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const mytabs = []

    function HandleForm(){
        console.log({'tabs':tabs_count,'title':title,'content':content})
        mytabs.push({'id':tabs_count,'title':title,'content':content})
    }
    

    return (
<Container style={{ width: '18rem' }}>

<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Núm.tabs</Form.Label>
    <Form.Control type="number" placeholder="insert number of tab" 
    value={tabs_count} onChange={e=>setTabs_count(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Título</Form.Label>
    <Form.Control type="text" placeholder="insert title to new tab" 
    value={title} onChange={e=>setTitle(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Conteúdo</Form.Label>
    <Form.Control as="textarea" rows={3} 
    value={content} onChange={e=>setContent(e.target.value)}
    />
  </Form.Group>
  <Button onClick={()=>{HandleForm()}}>Salva</Button>
</Form>
       
</Container>
    )
}