import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const {closeCurrentListCall, title, currentList} = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                closeCurrentListCallback = {closeCurrentListCall}
                currentList = {currentList}
                />
            </div>
        );
    }
}