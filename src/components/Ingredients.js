import React from 'react'

export default function Ingredients() {
    const [checkedOne, setCheckedOne] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [checkedThree, setCheckedThree] = React.useState(false);
    const [checkedFour, setCheckedFour] = React.useState(false);
    
    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
      };
    
      const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
      };
      
      const handleChangeThree = () => {
        setCheckedTwo(!checkedThree);
      };
     
      const handleChangeFour = () => {
        setCheckedTwo(!checkedFour);
      };
  return (
    <div>
          <Checkbox
        label="Pepperoni"
        value={checkedOne}
        onChange={handleChangeOne}
      />
      <Checkbox
        label="Ham"
        value={checkedTwo}
        onChange={handleChangeTwo}
      />
      <Checkbox
        label="Pineapple"
        value={checkedThree}
        onChange={handleChangeThree}
      />
      <Checkbox
        label="Olives"
        value={checkedFour}
        onChange={handleChangeFour}
      />
    </div>
  )
}
