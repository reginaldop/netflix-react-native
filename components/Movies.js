import React from 'react'
import { Dimensions, ScrollView } from 'react-native'

import styled from 'styled-components/native'

const Container = styled.View`
	padding: 20px 0 50px 10px;
`

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
	margin-bottom: 5px;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
	height: 150px;
`

const MovieCard = styled.View`
	padding-right: 9px;
`

const Movies = ({ label, item }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<ScrollView horizontal>
				{item.map((movie, item) => {
					return (
						<MovieCard key={String(item)}>
							<MoviePoster resizeMode='cover' source={movie} />
						</MovieCard>
					)
				})}
			</ScrollView>
		</Container>
	)
}

export default Movies
