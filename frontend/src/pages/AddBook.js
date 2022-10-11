import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import styled from 'styled-components';

const AddBook = () => {
  const { user } = useAuth0();
  const [values, setValues] = useState({
    title: '',
    cover_image: '',
    pages: '',
    releaseDate: '',
    isbn: '',
    author: null,
    wishListedBy: [],
    subscribedBy: [],
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(values);

    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, author: user.sub }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <SectionTitle>Add a Book</SectionTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='title'
          value={values.title}
          onChange={handleChange}
          placeholder='Book title'
        />
        <Input
          type='text'
          name='cover_image'
          value={values.cover_image}
          onChange={handleChange}
          placeholder='Cover image URL'
        />
        <Input
          type='text'
          name='pages'
          value={values.pages}
          onChange={handleChange}
          placeholder='Pages'
        />
        <Input
          type='text'
          name='releaseDate'
          value={values.releaseDate}
          onChange={handleChange}
          placeholder='Release year'
        />
        <Input
          type='text'
          name='isbn'
          value={values.isbn}
          onChange={handleChange}
          placeholder='ISBN'
        />
        <SubmitButton type='submit'>Add Book</SubmitButton>
      </Form>
    </Container>
  );
};
export default AddBook;

const Container = styled.div`
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  margin: 0.5em 0;
`;
const Form = styled.form`
  max-width: 600px;
`;
const Input = styled.input`
  padding: 0.8em;
  display: block;
  margin: 1em 0;
  width: 100%;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: #6143e1;
  border: none;
  padding: 1em 2em;
  cursor: pointer;
  font-size: 16px;
`;
