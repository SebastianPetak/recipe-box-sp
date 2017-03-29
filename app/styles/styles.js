const styles = {
	/* RecipesHeading styles */
	topBarStyles: {
		width: '100%',
		backgroundColor: '#FF6347',
		color: '#FDF5E6',
		marginBottom: '1.5em',
		border: '1px solid #FF6347',
		borderRadius: '0px 0px 5px 5px'
	},
	topBarTitleStyles: {
		marginLeft: '10%',
		fontFamily: 'Signika Negative', /* sans-serif' */
		fontWeight: '700',
		whiteSpace: 'nowrap'
	},
	addRecipeButton: {
		backgroundColor: '#FF6347',
		color: '#FDF5E6', //black: #191919
		borderColor: '#FDF5E6',
		marginRight: '3%',
		fontFamily: 'Signika Negative',
		fontSize: '1.5em',
		border: '1px solid #FDF5E6',
		borderRadius: '2%'
	},

	/* RecipeList styles */
	// ListingDivStyles allows for Overflow image with vertical centering
	fullListDivStyles: {
		minHeight: '600px'
	},
	listingDivStyles: {
		position: 'relative',
		height: '200px',
		width: '100%',
		overflow: 'hidden',
	},
	recipeListingStyles: {
		position: 'absolute',
		top: '-100%',
		left: '0',
		right: '0',
		bottom: '-100%',
		height: 'auto',
		width: '100%',
		margin: 'auto'
	},
	listingFigTitleStyles: {
		fontFamily: 'Signika Negative',
		fontSize: '1.5em',
		color: '#47e3ff'
	},
	listingFigTextStyles: {
		fontFamily: 'Signika Negative',
		fontSize: '1em',
		color: '#47e3ff'
	},
	/* RecipeFooter Styles */
	footerRowStyles: {
		marginTop: '1.5em',
		backgroundColor: '#47e3ff',
		textAlign: 'center',
		color: '#191919',
		fontFamily: 'Signika Negative',
		fontSize: '1.3em',
		border: '2px solid #47e3ff',
		borderRadius: '5px'
	},
	footerIconStyles: {
		fontSize: '100px',
		color: '#FDF5E6'
	}
};

/* Color pallet
	tomato: #FF6347
	neon-teal: #47e3ff
	off-black: #191919
	off-white: #FDF5E6
*/
module.exports = styles;
