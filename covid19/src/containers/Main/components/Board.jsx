// eslint-disable-next-line
import React, { memo } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card.jsx'

function Board({ data }) {
    // eslint-disable-next-line
    const { cases, todayDeaths, recovered, deaths, todayCases, casesPerOneMillion, deathsPerOneMillion } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    console.log(todayCases)

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(cases) } label="Total de casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={todayDeaths} label="Óbitos hoje" color="#F7B829" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ todayCases } label="Casos hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(deaths) } label="Total de mortos" color="#E9507B" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={ getValue(recovered) } label="Total de recuperados" color="#67C887" />
            </Grid>
        </Grid>
    )
}

export default Board