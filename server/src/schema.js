const { gql } = require('apollo-server');

const typeDefs = gql`
	"A Track is a group of Modules that teaches about a specific topic"
	type Track {
		id: ID!
		"the track's title"
		title: String!
		"the track's main author"
		author: Author!
		"the track's main illustration to display in track card or track page details."
		thumbnail: String
		"the track's approximate length to complete, in minutes"
		length: Int
		"the number of modules this track contains"
		modulesCount: Int
	}

	"Author of a complete Teack or Module"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}

	type Mission {
		id: ID!
		name: String!
		description: String!
	}

	type SpaceCat {
		id: ID!
		name: String!
		age: Int
		missions: [Mission]
	}

	type Query {
		"Get tracks array for homepage grid"
		tracksForHome: [Track!]!
		spaceCats: [SpaceCat]
	}
`;

module.exports = typeDefs;
