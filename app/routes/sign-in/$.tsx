import { SignIn } from "@clerk/remix";

export default function Posts() {
  return (
    <div style={{ border: "2px solid blue", padding: "2rem" }}>
      <h1>Sign In route</h1>
      <SignIn routing={"path"} path={"/sign-in"} />
    </div>
  );
}
