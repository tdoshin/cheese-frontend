import {useState} from "react"



function Show(props){
    const id = props.match.params.id
    const cheese = props.cheese
    const cheeseitem = cheese.find((p)=>{
        return p._id === id
    })


    //state for form 
    const [editForm, setEditForm] = useState(cheeseitem)


    //handleChange function for form
    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]:event.target.value
        })
    }
    //handleSubmit for when form is submitted
    const handleSubmit = (event) => {
        event.preventDefault()
        //update cheese item 
        props.updateCheese(editForm,cheeseitem._id)
        //redirect back to index page
        props.history.push("/")
    }

    return <div className="cheeseitem">
        <h1>{cheeseitem.name}</h1>
        <h2>{cheeseitem.countryOfOrigin}</h2>
        <img src={cheeseitem.image} alt={cheeseitem.name}/>

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            />

            <input 
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />

            <input 
            type="text"
            value={editForm.countryOfOrigin}
            name="countryOfOrigin"
            placeholder="country"
            onChange={handleChange}
            />
            <input type="submit" value="Update Cheese" />

        </form>

    </div>

}

export default Show