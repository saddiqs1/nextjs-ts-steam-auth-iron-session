import React from "react";
import { withIronSessionSsr } from "iron-session/next";

import { InferGetServerSidePropsType } from "next";
import Layout from "../layouts/DefaultLayout";
import { sessionOptions } from "../lib/auth/session";

export default function SsrProfile({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <h1>Your Steam profile</h1>
      <h2>
        This page uses{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#server-side-rendering">
          Server-side Rendering (SSR)
        </a>{" "}
        and{" "}
        <a href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props">
          getServerSideProps
        </a>
      </h2>

      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/api/auth/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: undefined,
      },
    };
  }

  return {
    props: { user: req.session.user },
  };
},
sessionOptions);
