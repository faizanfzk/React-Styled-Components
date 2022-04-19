

import { Buttons } from './components/Button'

function App() {
 

  return (
   <div>
     <Buttons  type={"primary"}>Primary Button</Buttons>
     <Buttons  type={"default"}>Default Button</Buttons>
     <Buttons  type={"dashed"}>Dashed Button</Buttons>
     <Buttons  type={"text"}>Text Button</Buttons>
     <Buttons  type={"link"}>Link Button</Buttons>
   
     </div>
  )
}

export default App
