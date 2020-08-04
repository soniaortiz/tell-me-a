import React from 'react'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
const request = require('axios')

export class Jokes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jokesList: []
        }
    }

    fetchJokes() {
        request.get('/joke')
            .then((response) => {
                this.setState({
                    jokesList: response.data
                })
            })
            .catch((e) => {
                console.log(e)
            })
    }

    renderList() {
        let list = this.state.jokesList.length ?
            this.state.jokesList.map((joke) => {
                return (
                    <ListItem key={joke.id + joke.type}>
                        <ListItemText
                            primary={joke.setup}
                            secondary={joke.punchline}
                        />
                    </ListItem>
                )
            })
            : []

        return (
            <List>
                {list}
            </List>
        )

    }

    componentDidMount() {
        this.fetchJokes()
    }

    render() {
        return (
            <Container fixed>
                {
                    this.state.jokesList
                    && this.state.jokesList.length
                    && this.renderList()
                }
            </Container>
        )
    }

}
