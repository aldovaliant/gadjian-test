import React, { useEffect, useState } from 'react';
import Personnel from './components/Personnel';
import './PersonnelList.css';
import { FaPlus } from 'react-icons/fa';
import { InputAdornment, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const PERSONNEL_API = "https://randomuser.me/api/?results=8";

function PersonnelList(params) {

    const [personnelList, setPersonnelList] = useState([]);
    const [currentPersonnelList, setCurrentPersonnelList] = useState([]);

    const getPersonnel = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setPersonnelList(data.results));
        setCurrentPersonnelList(personnelList.slice(0,4));
    }

    useEffect(() => {
        getPersonnel(PERSONNEL_API);
    }, [])

    return (
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
                {currentPersonnelList.length > 0 &&
                    currentPersonnelList.map((personnel, index) => <Personnel key={index} {...personnel} />)}
            </div>
            <div>
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default PersonnelList