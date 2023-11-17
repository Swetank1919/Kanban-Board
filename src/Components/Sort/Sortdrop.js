import React, { useState } from 'react';
import "./Sortdrop.css"
import {Sliders,ChevronDown} from "react-feather"
const Sortdrop = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>

            <div className='you'>
                <div onClick={handleToggle} className='display'> <Sliders size="18" className='slider' /> Display <ChevronDown size="20px" />  </div>
                    {isOpen &&
                    <div className='Ord'>
                    <div className="group">
                        <span>Grouping</span>
                        <select    >
                            <option value="status">Status</option>
                            <option value="priority">Priority</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    <div className="order">
                        <span>Ordering</span>
                        <select  >
                            <option value="priority">Priority</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                    </div>
                }
            </div>
        </div>

    );
};

export default Sortdrop;