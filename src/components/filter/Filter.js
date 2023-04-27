import React, { useEffect, useState } from "react";
import './Filter.css';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import Aos from "aos";
import "aos/dist/aos.css"
import ProductList from "../ProductList/ProductList";

const Filter =()=>{

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);

      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleCategoryChange = (event) => {
        event.preventDefault();
        const clickedButton = event.target;
        const categoryValue = clickedButton.value === category ? "" : clickedButton.value;
        setCategory(categoryValue);
      };
    
      const handlesortChange = (event) => {
        event.preventDefault();
        const clickedButton = event.target;
        const sortValue = clickedButton.value === sort ? "" : clickedButton.value;
        setSort(sortValue);
      };
    
    return(
        <>
        <div className="form">
            <form>
                <div className="search">
                    <h2 className="f2flt">Find Your Product</h2>
                    <input type='text' placeholder="Search For Product..." id="name" value={name} onChange={handleNameChange}/>
                    <SearchIcon className="icon-search" fontSize="small"/>
                </div>
                <div className="content-filter-sort">
                    <div className="filter">
                        <div className="title">
                            <h5 className="f5flt">Filter <FilterListIcon fontSize="small"/></h5>
                        </div>
                        <div className="filter-button" data-aos="fade-right">
                            <button className={`button ${category === "" ? "checked" : ""}`} value="" onClick={handleCategoryChange} id="button-focus">All</button>
                            <button className={`button ${category === "men" ? "checked" : ""}`} value="men" onClick={handleCategoryChange}>Men</button>
                            <button className={`button ${category === "women" ? "checked" : ""}`} value="women" onClick={handleCategoryChange}>Women</button>
                        </div>
                    </div>
                    <div className="sort">
                        <div className="title">
                            <h5 className="f5flt">Sort <SortIcon fontSize="small"/></h5>
                        </div>
                        <div className="sort-button" data-aos="fade-right">
                            <button className={`button ${sort === "" ? "checked" : ""}`} id="button-focus" value="" onClick={handlesortChange}>Featured</button>
                            <button className={`button ${sort === "new" ? "checked" : ""}`} value="new" onClick={handlesortChange}>Newest</button>
                            <button className={`button ${sort === "high" ? "checked" : ""}`} value="high" onClick={handlesortChange}>High-price</button>
                            <button className={`button ${sort === "low" ? "checked" : ""}`} value="low" onClick={handlesortChange}>Low-price</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <ProductList cat={category} filters={name} sort={sort}/>
        </>
    );
};

export default Filter;

