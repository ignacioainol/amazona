import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'

function ProductsScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, seCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [numReview, setNumReview] = useState('');
    const productSave = useSelector(state => state.userSignin);
    const { loading: loadingSave, success: successSave, error: errorSave } = userSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/");
        }
        return () => {

        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({ name, price, image, brand, category, countInStock, description, rating, numReview }));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loading && <div>Loading ...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="brand">Brand</label>
                    <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="rating">Rating</label>
                    <input type="text" name="rating" id="rating" onChange={(e) => setRating(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="name">Num Reviews</label>
                    <input type="text" name="" id="name" onChange={(e) => setName(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="name">Description</label>
                    <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)}>

                    </textarea>
                </li>
                <li>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <button type="submit" className="button primary">Create</button>
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center"> Create your amazon account </Link>
                </li>

            </ul>
        </form>
    </div>
}

export default ProductsScreen
