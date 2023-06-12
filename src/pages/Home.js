import AppointmentForm from "../components/appointment_form/appointmentForm";

const Home = () => {
//   const { posts, loading, error } = useFetch('/api/posts', "GET");

  return (
    <div>
      <h2>Home Page</h2>
      <AppointmentForm />

    </div>
  );
};

export default Home;
