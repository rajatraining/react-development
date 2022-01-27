import {useForm} from 'react-hook-form';



function BookInputByHooks()
{
    const {register, handleSubmit} = useForm();
   
    const onSubmit = (data) => {
        console.log(data);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
      
          fetch("http://localhost:7001/library/books/", requestOptions).then(
            (response) => console.log(response)
          );
    };



    return (
        <div className="book-input-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <label>Enter the ID:</label>
            <input
              type={"text"}
              name="id"
              {...register('id',{required:true})}
            />
          </div>

          <div>
            <label>Enter the Book Name:</label>
            <input
              type={"text"}
              name="bookName"
              {...register('bookName')}
            />
          </div>

          <div>
            <label>Enter the Author:</label>
            <input
              type={"text"}
              name="author"
              {...register('author')}
            />
          </div>

          <div>
            <label>Enter the Price:</label>
            <input
              type={"text"}
              name="price"
              {...register('price')}
            />
          </div>

          <input type={"submit"} value={"Add new Book"} />
        </form>
      </div>
    );
}

export default BookInputByHooks;