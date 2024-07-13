import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import BoxSystemProps from "../Body/Body";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function HomeCard({ title, description }) {
  return (
    <Card sx={{ width: 300, margin: 1 }}>
      <CardActionArea>
        <CardMedia height="140" />
        <CardContent sx={{ height: 200 }}>
        <Box sx={{ height: '100%', overflowY: 'auto' }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const Home = () => {
  return (
    <>
      <BoxSystemProps>
        <Header />
        <div className="flex justify-center items-center text-sky-400">
          <Typography variant="h1" display="block" gutterBottom>
            ДОМА
          </Typography>
        </div>
        <div className="flex justify-center items-center text-sky-400">
          <Typography variant="text" display="block" gutterBottom>
            Последние новости
          </Typography>
        </div>

        <Box display="flex" justifyContent="center" alignItems="center">
          <HomeCard
            title="Сайт для управления книгами"
            description="Привет! Этот сайт нужен для того, чтобы управлять книгами и посетителями. Этот сайт - экзамен. И надеюсь, он вам понравился!"
          />
          <HomeCard
            title="Подождите!"
            description="Пожалуйста! Оцените данный проект. Я понимаю, что я все еще новичек, но надеюсь что вам понравиться это! Хотя и дизайн получился больше для мобильных устройств, но все же я считаю это не плохо"
          />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <HomeCard
            title="Для кого нужен данный сайт?"
            description="Он нужен для модерирования и добавления новых книг и посетителей! Итерфейс был адаптирован (частично) под мобильные устройства, и сайт можно использовать откуда угодно"
          />
          <HomeCard
            title="Подождите! Еще раз!"
            description="Пожалуйста!"
          />
        </Box>

        <Footer />
      </BoxSystemProps>
    </>
  );
};

export default Home;
