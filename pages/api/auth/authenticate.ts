// /api/auth/authenticate

import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../../lib/auth/session";
import { steamAuth } from "../../../lib/auth/steamAuth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const steamUser = await steamAuth.authenticate(req);

      req.session.user = {
        userId: steamUser.steamid,
        username: steamUser.username,
        avatarUrl: steamUser.avatar.large,
      };

      await req.session.save();

      // TODO - You should insert the current user into your DB here if they don't exist already.
      // You could use 'steamUser.steamid', which refers to the steamid64 of a user, which is unique.

      return res.redirect("/");
    } catch (error: any) {
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);
