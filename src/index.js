import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    const cptHaddock = {
        author: "Captain Haddock",
        comment: "Billions of billious blue blistering barnacles in a thundering typhoon",
        time: "Sometime",
        image: "https://media.scotchwhisky.com/images/media/c1fd4c63ddf3fba2014c31fde56071e6.jpg"
    }
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail
                author="Saraswati"
                comment="The mind creates the appearance of duality..."
                time="Always but never"
                image={faker.image.abstract()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author="Adolfen"
                comment="Mooost excellent!"
                time="Today at 13:37"
                image={faker.image.cats()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail
                author={cptHaddock.author}
                comment={cptHaddock.comment}
                time={cptHaddock.time}
                image={cptHaddock.image}
            />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))