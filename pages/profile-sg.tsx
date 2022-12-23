import React from "react";
import Layout from "../layouts/DefaultLayout";
import useUser from "../lib/hooks/useUser";

export default function SgProfile() {
  const { user } = useUser({
    redirectTo: "/api/auth/login",
  });

  return (
    <Layout>
      <h1>Your Steam profile</h1>
      <h2>
        This page uses{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
          Static Generation (SG)
        </a>{" "}
        and the <a href="/api/auth/user">/api/auth/user</a> route (using{" "}
        <a href="https://github.com/vercel/swr">vercel/SWR</a>)
      </h2>
      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}
