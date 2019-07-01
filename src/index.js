import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.cats()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Adolfen
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 13:37</span>
                    </div>
                    <div className="text">Mooost excellent!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.abstract()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Saraswati
                    </a>
                    <div className="metadata">
                        <span className="date">Always but never</span>
                    </div>
                    <div className="text">The mind creates the appearance of duality...</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="https://media.scotchwhisky.com/images/media/c1fd4c63ddf3fba2014c31fde56071e6.jpg"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Captain Haddock
                    </a>
                    <div className="metadata">
                        <span className="date">Sometime</span>
                    </div>
                    <div className="text">Billions of billious blue blistering barnacles in a thundering typhoon</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))