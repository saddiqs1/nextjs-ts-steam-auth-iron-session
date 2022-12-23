import Link from "next/link";
import Image from "next/image";
import useUser from "../../lib/hooks/useUser";

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          {!user && (
            <li>
              <Link href="/api/auth/login" legacyBehavior>
                <a>Login</a>
              </Link>
            </li>
          )}
          {user && (
            <>
              <li>
                <Link href="/profile-sg" legacyBehavior>
                  <a>
                    <span
                      style={{
                        marginRight: ".3em",
                        verticalAlign: "middle",
                        borderRadius: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={user.avatarUrl}
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    Profile (Static Generation, recommended)
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile-ssr" legacyBehavior>
                  <a>Profile (Server-side Rendering)</a>
                </Link>
              </li>
              <li>
                <Link href="/api/auth/logout" legacyBehavior>
                  <a>Logout</a>
                </Link>
              </li>
            </>
          )}
          <li>
            <a href="https://github.com/saddiqs1/nextjs-ts-steam-auth-iron-session">
              <Image
                src="/GitHub-Mark-Light-32px.png"
                width="32"
                height="32"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }

        li {
          margin-right: 1rem;
          display: flex;
        }

        li:first-child {
          margin-left: auto;
        }

        a {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        a img {
          margin-right: 1em;
        }

        header {
          padding: 0.2rem;
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
}
