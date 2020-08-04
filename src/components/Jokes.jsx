import React from 'react'
import Container from '@material-ui/core/Container';
const request = require('axios')

export class Jokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokesList: []
        }
    }

    componentDidMount() {
        console.log('DID MOUNT')
        request.get('/joke')
            .then((response) => {
                console.log(response, '???')
                this.setState({
                    jokesList: response.data
                })
            })
    }

    renderList() {
        // console.log('>>>', this.state.jokesList)
        let list = this.state.jokesList.length ?
            this.state.jokesList.map((joke) => {
                return (
                    <li key={joke.id + joke.type}>
                        <p>
                            {joke.setup}
                        </p>
                        <p>
                            {joke.punchline}
                        </p>
                    </li>
                )
            })
            : []

        return (
            <ul>
                {list}
            </ul>
        )

    }

    render() {
        return (
            <Container fixed>
                {
                this.state.jokesList.length ? this.renderList() : null}
            </Container>
        )
    }

}
