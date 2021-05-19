import { useState } from "react";
import {Link} from "react-router-dom"

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
      name: "",
      image: "",
      countryOfOrigin: "",
    });

    // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCheese(newForm);
        setNewForm({
          name: "",
          image: "",
          countryOfOrigin: "",
        });
      };
    
        // loaded function
  const loaded = () => {
    return props.cheese.map((cheeseitem) => (
      <div key={cheeseitem._id} className="cheeseitem">
        <Link to={`/cheese/${cheeseitem._id}`}><h1>{cheeseitem.name}</h1></Link>
        <img src={cheeseitem.image} alt={cheeseitem.name} />
        <h3>{cheeseitem.countryOfOrigin}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading cheese...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="country"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheese ? loaded() : loading()}
    </section>
  );
  
}

export default Index