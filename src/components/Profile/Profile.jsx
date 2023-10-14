import { useParams } from "react-router-dom";
import Loader from "./Loader";
import NavBar from "../NavBar";
import User from "./User";
import AboutUser from "./AboutUser";
import Recomendations from "./Recomendations";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const Profile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [caData, setCaData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/ca/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCaData(data);
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <>
      <NavBar />
      <div className="flex flex-col gap-14 lg:flex-row justify-center lg:justify-between px-5 lg:px-16 mt-20 w-full">
        <User caData={caData} />
        <AboutUser caData={caData} />
      </div>
      <Recomendations />
      <div className="mt-28">
        <Footer />
      </div>
    </>
  );
};

export default Profile;
