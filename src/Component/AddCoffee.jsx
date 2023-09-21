

const AddCoffee = () => {

    const handleAddcoffee = event =>{

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supllier.value;
        const taste = form.taste.value;
        const categories = form.categories.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, categories, details, photo}
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
                method: 'POST',
                headers: {
                       'content-type': 'application/json' 
                },
                body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
               if(data.insertedId){
                alert('Coffee Added Successfully')
               }
        })


    }
    return (
        <div>
          <form onSubmit={handleAddcoffee} className="p-24">
            <h1 className="text-2xl">Add a Coffee</h1>
            {/* form row */}
            <div className="md:flex ">
                    <div className="form-control w-full md: w-1/2 p-10">
                    
                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />
                
                    </div>
                    <div className="form-control w-full md: w-1/2 p-10">
                    
                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full " />
                
                    </div>
            </div>
            <div className="md:flex ">
                    <div className="form-control w-full md: w-1/2 p-10">
                    
                    <input type="text" name="supllier" placeholder="Supllier's name" className="input input-bordered w-full " />
                
                    </div>
                    <div className="form-control w-full md: w-1/2 p-10">
                    
                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full " />
                
                    </div>
            </div>
            <div className="md:flex ">
                    <div className="form-control w-full md: w-1/2 p-10">
                    
                    <input type="text" name="categories" placeholder="Categories" className="input input-bordered w-full " />
                
                    </div>
                    <div className="form-control w-full md: w-1/2 p-10">
                    
                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full " />
                
                    </div>
            </div>
            <div className="">
                    <div className="form-control w-full md: w-full p-10">
                    
                    <input type="text" name="photo" placeholder=" Photo URL" className="input input-bordered w-full " />
                
                    </div>
                  
            </div>
            <input type="submit" value='Add Coffee' className="btn btn-block"/>
          </form>

        </div>
    );
};

export default AddCoffee;