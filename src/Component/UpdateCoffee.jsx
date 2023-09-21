import { useLoaderData } from "react-router-dom";


const UpdateCoffee = () => {
    const handleUpdatecoffee = event =>{

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supllier.value;
        const taste = form.taste.value;
        const categories = form.categories.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, categories, details, photo}
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'PUT',
                headers: {
                       'content-type': 'application/json' 
                },
                body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
               if(data.modifiedCount > 0){
                alert('Coffee Updatted Successfully')
               }
        })


    }

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, categories, details, photo} = coffee 

    return (
        <div>
        <form onSubmit={handleUpdatecoffee} className="p-24">
          <h1 className="text-2xl">Update Coffee: {name}</h1>
          {/* form row */}
          <div className="md:flex ">
                  <div className="form-control w-full md: w-1/2 p-10">
                  
                  <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full " />
              
                  </div>
                  <div className="form-control w-full md: w-1/2 p-10">
                  
                  <input type="text" name="quantity" defaultValue={quantity}  placeholder="Quantity" className="input input-bordered w-full " />
              
                  </div>
          </div>
          <div className="md:flex ">
                  <div className="form-control w-full md: w-1/2 p-10">
                  
                  <input type="text" name="supllier" defaultValue={supplier}  placeholder="Supllier's name" className="input input-bordered w-full " />
              
                  </div>
                  <div className="form-control w-full md: w-1/2 p-10">
                  
                  <input type="text" name="taste" defaultValue={taste}  placeholder="Taste" className="input input-bordered w-full " />
              
                  </div>
          </div>
          <div className="md:flex ">
                  <div className="form-control w-full md: w-1/2 p-10">
                  
                  <input type="text" name="categories" defaultValue={categories}  placeholder="Categories" className="input input-bordered w-full " />
              
                  </div>
                  <div className="form-control w-full md: w-1/2 p-10">
                  
                  <input type="text" name="details" defaultValue={details}  placeholder="Details" className="input input-bordered w-full " />
              
                  </div>
          </div>
          <div className="">
                  <div className="form-control w-full md: w-full p-10">
                  
                  <input type="text" name="photo" defaultValue={photo}  placeholder=" Photo URL" className="input input-bordered w-full " />
              
                  </div>
                
          </div>
          <input type="submit" value='Update Coffee' className="btn btn-block"/>
        </form>

      </div>
    );
};

export default UpdateCoffee;