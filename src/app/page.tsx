import RootLayout from "./layout";
import MoviesPage from "./movies/page";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <MoviesPage/>
    </RootLayout>
  );
}
