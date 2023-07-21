import React from "react";
export const GetInfoButton = ({ onClick }) => {
    return (
        <button type="button" className="btn btn-sm btn-secondary" onClick={onClick}>
            More information
        </button>
    )
}