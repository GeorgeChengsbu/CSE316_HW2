import React from "react";
import ItemCard from "./ItemCard";
export default class Workspace extends React.Component {
    render() {
        const {currentList, renameItemCallback} = this.props;
        if (currentList === null) {
            return (
                <div id="top5-workspace">
                    <div id="workspace-edit">
                        <div id="edit-numbering">
                            <div className="item-number">1.</div>
                            <div className="item-number">2.</div>
                            <div className="item-number">3.</div>
                            <div className="item-number">4.</div>
                            <div className="item-number">5.</div>
                        </div>
                        <div id ="edit-items">
                            <div className="top5-item"></div>
                            <div className="top5-item"></div>
                            <div className="top5-item"></div>
                            <div className="top5-item"></div>
                            <div className="top5-item"></div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div id="top5-workspace">
                    <div id="workspace-edit">
                        <div id="edit-numbering">
                            <div className="item-number">1.</div>
                            <div className="item-number">2.</div>
                            <div className="item-number">3.</div>
                            <div className="item-number">4.</div>
                            <div className="item-number">5.</div>
                        </div>
                        <div id="edit-items">
                            <div className="top5-item">
                                {
                                <ItemCard
                                    i={0}
                                    currentList={currentList}
                                    renameItemCallback={renameItemCallback}
                                    />
                                }
                            </div>
                            <div className="top5-item">{currentList.items[1]}</div>
                            <div className="top5-item">{currentList.items[2]}</div>
                            <div className="top5-item">{currentList.items[3]}</div>
                            <div className="top5-item">{currentList.items[4]}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}