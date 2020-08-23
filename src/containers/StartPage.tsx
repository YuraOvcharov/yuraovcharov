import React, { FC } from 'react'
import { makeStyles, Card, CardHeader, CardContent, Typography, Link } from '@material-ui/core'
import { Respository } from '../types'

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        marginTop: spacing(2),
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: spacing(2),
    },
}))

const repositories: Respository[] = [
    {
        value: 'weather',
        title: 'react-weather-in-city',
        url: 'https://react-weather-in-city.herokuapp.com/',
        description: 'Weather app. Simple search and minimalist design)',
    },
    {
        value: 'films',
        title: 'todo-films-react',
        url: 'https://todo-films-react.herokuapp.com/',
        description: 'Todo app with films',
    },
    {
        value: 'meetup',
        title: 'meetup',
        url: 'https://yuraovcharov.github.io/meetup/public',
        description: 'LandingPage from psd template',
    },
    {
        value: 'sertin',
        title: 'sertin',
        url: 'https://yuraovcharov.github.io/sertin/public',
        description: 'LandingPage from psd template',
    },
]

const StartPage: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {repositories.map((repo) => (
                <Card key={repo.value}>
                    <CardHeader
                        title={<Link href={repo.url}>{repo.title}</Link>}
                    // subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body1">{repo.description}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default StartPage
