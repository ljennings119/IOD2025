export default function Login() {
  return (
    <div className="componentBox">
      <h2>Login Page</h2>

      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />

        <label>
          Password:
          <input type="password" />
        </label>
        <br />

        <button>Login</button>
      </form>

    </div>
  );
}
