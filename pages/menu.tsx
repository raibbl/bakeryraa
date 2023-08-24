import {
  useMediaQuery,
  Stack,
  styled,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";
import { CarouselResponsive } from "../components/CarouselResponsive";
import { BakeryName } from "../components/BakeryName";
import { Cairo } from "@next/font/google";
import { Button } from "antd";
const cairoFont = Cairo({ subsets: ["latin"] });

export function FoodItems(): JSX.Element {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Stack spacing={2}>
      <Card>
        <Grid container spacing={0} columns={16}>
          <Grid xs={8}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://thumbs.dreamstime.com/z/cat-s-half-heads-white-background-19474224.jpg"
              title="green iguana"
            />
          </Grid>
          <Grid xs={8}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Grid>
        </Grid>

        <CardActions style={{ float: "right" }}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="https://thumbs.dreamstime.com/z/cat-s-half-heads-white-background-19474224.jpg"
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
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="https://thumbs.dreamstime.com/z/cat-s-half-heads-white-background-19474224.jpg"
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
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="https://thumbs.dreamstime.com/z/cat-s-half-heads-white-background-19474224.jpg"
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
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image="https://thumbs.dreamstime.com/z/cat-s-half-heads-white-background-19474224.jpg"
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
    </Stack>
  );
}
export default function Page({}) {
  const isMobile = useMediaQuery("(max-width:950px)");
  return (
    <main>
      <div
        style={{
          alignItems: "center",
          paddingBottom: `${isMobile ? "30" : "60"}px`,
        }}
      >
        <BakeryName isMobile={isMobile} fontClassName={cairoFont.className} />
        <CarouselResponsive isMobile={isMobile} />
        <Button
          ghost
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            verticalAlign: "middle",
            position: "absolute",
            marginLeft: "-50px",
            left: "50%",
            width: "100px",
            height: "50px",
            paddingBottom: "20px",
            bottom: "170px",
          }}
          className={cairoFont.className}
          size="middle"
          onClick={() => {
            console.log("hey");
          }}
        >
          أطلب الأن
        </Button>
      </div>
      <FoodItems />
    </main>
  );
}
