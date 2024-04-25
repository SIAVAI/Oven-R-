const Register = () => {
  return (
    <div className="flex justify-center items-center  p-6">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-inherit text-white font-bodoni font-semibold border-2 border-white  box">
        <h2 className="text-6xl font-bold text-[#feee8e] text-center my-4">
          Register
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="text-[#feee8e] font-medium my-4"></div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn  bg-[#feee8e] font-medium text-black border border-none"
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
