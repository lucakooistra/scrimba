import React from "react";

function App() {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", email: ""}
    )
  
    console.log(formData)
  
  function handleChange(event){
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form>
      <input 
        type="text" 
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input 
        type="text" 
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input 
        type="email" 
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
    </form>
  );
}

export default App;
