import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()}
                               author={faker.name.firstName()}
                               timeAgo={faker.date.weekday()}
                               content={faker.lorem.sentence()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()}
                               author={faker.name.firstName()}
                               timeAgo={faker.date.weekday()}
                               content={faker.lorem.sentence()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail avatar={faker.image.avatar()}
                               author={faker.name.firstName()}
                               timeAgo={faker.date.weekday()}
                               content={faker.lorem.sentence()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));