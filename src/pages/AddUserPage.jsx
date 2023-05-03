import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/Users/usersOperations';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImg] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = ev => {
    const { name, value } = ev.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'adress':
        setAdress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'img':
        setImg(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    const newUser = { name, email, adress, phone, img };
    const res = await dispatch(addUser(newUser)).unwrap();
    navigate(`/users/${res.id}`)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Adress
          <input
            type="text"
            name="adress"
            value={adress}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="string"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Avatar
          <input type="url" name="img" value={img} onChange={handleChange} />
        </label>
        <button>Save</button>
      </form>
    </>
  );
};