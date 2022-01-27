import {useForm} from 'react-hook-form';
import { Form,Button } from 'react-bootstrap';

export default function BookFormHooks(props){
    const{register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Id </Form.Label>
            <Form.Control type="text" name="bookid" placeholder="Enter BookId" {...register('bookid')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Book Name </Form.Label>
            <Form.Control type="text" name="bookName" placeholder="Enter BookName" {...register('bookName')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author of Book </Form.Label>
            <Form.Control type="text" name="author" placeholder="Enter Author" {...register('author')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price </Form.Label>
            <Form.Control type="text" name="price" placeholder="Enter Price" {...register('price')}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );

}