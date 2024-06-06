import React from 'react';
import product_data from '../Datas/Products_data';
import { useNavigate } from 'react-router-dom';

const SearchingResultList = ({ searchingItem, setsearchingItem }) => {
    const navigate = useNavigate();
    const filteredProducts = product_data.filter((item) =>
        item.p_name.toLowerCase().includes(searchingItem.toLowerCase())
    );

    const handleClick = (id) => {
        setsearchingItem(" ");
        navigate(`/searching_product/${id}`);
    };

    return (
        <>
            {searchingItem.trim() === "" ? null : (
                <div className="result_list">
                    {filteredProducts.length === 0 ? (
                        <p>No results found</p>
                    ) : (
                        <ul>
                            {filteredProducts.map((item) => (
                                <li key={item.id} onClick={() => handleClick(item.id)}>
                                    <img src={item.p_images} alt="" />
                                    {item.p_name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default SearchingResultList;
