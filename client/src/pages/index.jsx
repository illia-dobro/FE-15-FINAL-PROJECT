/* our home page */
import { useGetUserQuery } from "../app/services/api";

function Home() {
  useGetUserQuery();
  return (
    <span>Our Home page!</span>
  )
}

export default Home;

