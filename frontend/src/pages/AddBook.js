import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  // user data from auth0
  const { user, isLoading, isAuthenticated } = useAuth0();
  // initial form values
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
  // to check if user is submitting the form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // handle input changes
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  // on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, author: user.sub }),
    })
      .then((res) => res.json())
      .then((data) => {
        // if book published, then go to homepage
        if (data.status === 201) {
          setIsSubmitting(false);
          navigate('/');
        }
      })
      .catch((err) => {
        // alert if any error happens
        alert(err.message);
        setIsSubmitting(false);
      });
  };

  // loading image while fetching user
  if (isLoading) {
    return (
      <Loading>
        <img
          src='https://thumbs.gfycat.com/BlandMildDungbeetle-size_restricted.gif'
          alt=''
        />
      </Loading>
    );
  }

  // if user not logged in
  if (!isAuthenticated) {
    return <p>Please login</p>;
  }

  return (
    <Container>
      <SectionTitle>Publish a Book</SectionTitle>
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
        <SubmitButton type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Publishing...' : 'Publish'}
        </SubmitButton>
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
  margin-top: 2em;
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
  border-radius: 4px;
  border: 1px solid #333;
  outline: none;
  transition: all 0.4s ease;

  :focus {
    border-color: #6143e1;
  }
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: #6143e1;
  border: none;
  padding: 1em 2em;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  img {
    width: 50%;
    max-width: 120px;
  }
`;
