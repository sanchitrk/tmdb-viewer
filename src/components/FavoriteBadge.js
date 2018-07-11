import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    color: theme.palette.primary.dark,
  }
});

function FavoriteBadge({classes, inFavorites, onAdd, onRemove}) {
  return (
    <IconButton
      onClick={(e) => {
        e.preventDefault();
        return inFavorites ? onRemove() : onAdd();
      }}
      title={`${inFavorites ? 'Remove from' : 'Add to'} Favorites`}
      className={classes.root}>
      {inFavorites ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
    </IconButton>
  );
}

FavoriteBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default withStyles(styles)(FavoriteBadge);