import React from "react";

export default class Item extends React.Component {
    handleDoubleClick = (number) => {
        return (
        <input
                    id={"list-item" + number}
                    className='list-card'
                    type='text'
                 //   onKeyPress={}
                   // onBlur={}
                  //  onChange={}
                    //defaultValue={}
                />
        )
    }

    render() {
        const {closeCurrentListCall, title} = this.props;
        return (
            <div>
                <Workspace
                handleDoubleClickCallback = {this.handleDoubleClick}
                />
            </div>
        );
    }
}
