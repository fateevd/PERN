import React from 'react';
import {useDispatch} from "react-redux";
import {sinUp} from "../../store/actions";

const CurrentPage = () => {
    const dispatch = useDispatch();
    dispatch(sinUp())
    return (
        <div>
            asdad
        </div>
    );
};

export default CurrentPage;