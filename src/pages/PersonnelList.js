import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Personnel from './components/Personnel';
import './PersonnelList.css';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { InputAdornment, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fetchPersonnels } from '../actions/actions';


function PersonnelList() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const personnelList = useSelector(state => state.personnels);

    const [currentPage, setCurrentPage] = useState(1);

    const personnelsPerPage = 4;

    const previousRef = useRef(null);
    const nextRef = useRef(null);
    const indexOfLastItem = currentPage * personnelsPerPage;
    const indexOfFirstItem = indexOfLastItem - personnelsPerPage;
    const displayPersonnels = personnelList.slice(indexOfFirstItem, indexOfLastItem)
        .map((personnel, index) => <Personnel key={index} {...personnel} />);

    useEffect(() => {
        dispatch(fetchPersonnels());
        // if(currentPage === 1){
        //     previousRef.current.disabled = true;
        // }
    }, [dispatch])

    const pageCount = Math.ceil(personnelList.length / personnelsPerPage);

    const handlePrevious = (e) => {
        if (currentPage - 1 >= 1) {
            nextRef.current.disabled = false;
            setCurrentPage(currentPage - 1);
        } else {
            e.target.disabled = true;
        }
    }
    const handleNext = (e) => {
        if (currentPage < pageCount) {
            previousRef.current.disabled = false;
            setCurrentPage(currentPage + 1);
            if (currentPage === pageCount) {
                e.target.disabled = true;
            }
        } else {
            e.target.disabled = true;
        }
    }

    return loading ? <h1 id="loading">Loading...</h1> : (
        <div className="div-personnel">
            <div className="div-personnelHeader">
                <div className="div-title">
                    <h1>Personnel List</h1>
                    <h3>List of all personnels</h3>
                </div>
                <div className="div-input">
                    {/* <input type="text" id="search-input" placeholder="Find Personnels"></input> */}
                    <TextField id="search-input" label="Find Personnels" type="search" variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <button id="btn-add">ADD PERSONNEL <FaPlus /> </button>
                </div>
            </div>
            <div className="personnel-list-container">
                {personnelList.length > 0 && displayPersonnels}
            </div>
            <div>
                <div className="div-pagination">
                    <button id="previous-btn" onClick={handlePrevious} ref={previousRef}>
                        <FaChevronLeft size="20px" /> Previous Page
                    </button>
                    <button id="next-btn" onClick={handleNext} ref={nextRef} >
                        Next Page<FaChevronRight size="20px" />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default PersonnelList