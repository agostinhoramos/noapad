import { GetServerSideProps } from "next"

import WelcomeView from "@/common/views/welcome"

interface HomeProps {
  clientDomain: string
  clientProtocol: string
}

const Home: React.FC<HomeProps> = ({ clientDomain, clientProtocol }) => {
  return (
    <WelcomeView />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const CLIENT_DOMAIN =
    req.headers.host?.split(".").slice(-2).join(".") || "localhost"
  const CLIENT_PROTOCOL =
    req.headers["x-forwarded-proto"] ||
    (req.connection.encrypted ? "https" : "http")

  return {
    props: {
      clientDomain: CLIENT_DOMAIN,
      clientProtocol: CLIENT_PROTOCOL,
    },
  }
}

export default Home