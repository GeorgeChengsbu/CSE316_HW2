import React from 'react';

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            item: null,
            text: null,
            editActive: false
        }
    }
    toggleState() {
            this.setState(prevState => ({
                editActive: !this.state.editActive
            }), () => {
                console.log(this.state.editActive);
            });
    }
    handleItemClick = (id) => {
        this.setState({
            editActive: !this.state.editActive,
            item:id,
            text: this.props.currentList.items[this.props.i]
        });
    }
    handleItemKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleUpdate = (event) => {
        this.setState(
            { text: event.target.value });
    }
    handleBlur() {
        let textValue = this.state.text;
        this.props.renameItemCallback(this.props.i, textValue);
        this.toggleState();
        console.log(this.state.editActive);
    }
    render() {
        const {currentList, i, renameItemCallback} = this.props;
        if (this.state.editActive) {
            return (
                <input
                    id={i}
                    className='list-'
                    type='text'
                    onKeyPress={this.handleItemKeyPress}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.handleUpdate}
                    defaultValue={currentList.items[i]}
                />)
        }
        else {
            return (
                <div
                    onDoubleClick={this.handleItemClick}
                >
                    {currentList.items[i]}
                </div>
            );
        }
    }
}