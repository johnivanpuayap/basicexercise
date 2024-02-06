import * as React from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as Logo } from './logo.svg';

import { Breadcrumbs, Icon } from '@mui/material';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function App() {

  const numberOfCards = 4;

  return (
    <Grid>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ marginRight: 1, fontSize: '3rem'}}
          >
            <Icon style={{ fontSize: 'inherit' }}>
              <Logo />
            </Icon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            John Ivan Puayap
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Message</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Breadcrumbs aria-label="breadcrumb" sx={{marginTop: 2, marginLeft: 8}}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Graphics
        </Link>
        <Typography color="text.primary">Lizard</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} sx={ {marginTop: 2}} justifyContent={"center"}>
        {Array.from({ length: numberOfCards }).map((_, i) => (
          <Card key={i} sx={{ maxWidth: 345, marginLeft: 0.5, marginRight: 0.5 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default App;