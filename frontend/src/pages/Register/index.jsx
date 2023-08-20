import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <div className="bg-green-500 w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-white mb-5 font-bold text-4xl">TokPlay</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
