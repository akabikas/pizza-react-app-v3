import React from 'react'

function MyForm() {
    const [firstNameInput, setName] = useState("");

  return (
    <div>
    <form>
      <label>Enter your first name:
        <input
          type="text" 
          value={firstNameInput}
          onChange={(firstname) => setName(firstname.target.value)}
        />
      </label>
    </form>
    </div>
  )
}

function MyForm() {
    const [lastNameInput, setName] = useState("");

  return (
    <div>
    <form>
      <label>Enter your last name:
        <input
          type="text" 
          value={lastNameInput}
          onChange={(lastName) => setName(lastName.target.value)}
        />
      </label>
    </form>
    </div>
  )
}

function Email() {
    const [AddressInput, setName] = useState("");

  return (
    <div>
    <form>
      <label>Enter your Address:
        <input
          type="text" 
          value={AddressInput}
          onChange={(Address) => setName(Address.target.value)}
        />
      </label>
    </form>
    </div>
  )
}
