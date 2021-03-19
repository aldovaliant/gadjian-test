import React, { useEffect, useState, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Personnel from './components/Personnel';
import './PersonnelList.css';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { InputAdornment, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fetchPersonnels } from '../actions/actions';


function PersonnelList(props) {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    // const personnelList = props.personnels;
    const personnelList = useSelector(state => state.personnels);
    const [currentPage, setCurrentPage] = useState(1);

    const personnelsPerPage = 4;

    const previousRef = useRef(null);
    const nextRef = useRef(null);
    const indexOfLastItem = currentPage * personnelsPerPage;
    const indexOfFirstItem = indexOfLastItem - personnelsPerPage;
    const displayPersonnels = personnelList.slice(indexOfFirstItem, indexOfLastItem)
        .map((personnel, index) => <Personnel key={index} {...personnel} />);

    // const [searchTerm, setSearchTerm] = useState("");
    // const handleChange = event => {
    //     setSearchTerm(event.target.value);
    // };

    useEffect(() => {
        dispatch(fetchPersonnels());

        // Filter untuk searching dari input, hasilnya baru bisa ditampilkan dalam console
        // const results = personnelList.filter(personnel =>
        //     personnel.name.first.toLowerCase().includes(searchTerm)
        // );
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
                    <h1>PERSONNEL LIST</h1>
                    <h3>List of all personnels</h3>
                </div>
                <div className="div-input">
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
                        // onChange={handleChange}
                    />
                </div>
                <div className="div-btn">
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