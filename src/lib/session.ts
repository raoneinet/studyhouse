import { SessionOptions } from "iron-session";

export interface SessionData {
  isLoggedIn: boolean;
  userId: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  avatar: string | null;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "studyhouse_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  },
};
