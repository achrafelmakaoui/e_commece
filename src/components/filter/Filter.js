import React, { useEffect } from "react";
import './Filter.css';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import Aos from "aos";
import "aos/dist/aos.css"

const Filter =()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
      },[]);
    return(
        <div className="form">
            <form>
                <div className="search">
                    <h2>Find Your Product</h2>
                    <input type='search' placeholder="Search For Product..."/>
                    <SearchIcon className="icon-search" fontSize="small"/>
                    {/* <button id="Search">Search <SearchIcon fontSize="small"/></button> */}
                </div>
                <div className="content-filter-sort">
                    <div className="filter">
                        <div className="title">
                            <h5>Filter <FilterListIcon fontSize="small"/></h5>
                        </div>
                        <div className="filter-button" data-aos="fade-right">
                            <button className="button" id="button-focus">All</button>
                            <button className="button">Men</button>
                            <button className="button">Women</button>
                        </div>
                    </div>
                    <div className="sort">
                        <div className="title">
                            <h5>Sort <SortIcon fontSize="small"/></h5>
                        </div>
                        <div className="sort-button" data-aos="fade-right">
                            <button className="button" id="button-focus">Featured</button>
                            <button className="button">Newest</button>
                            <button className="button">High-price</button>
                            <button className="button">Low-price</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Filter;