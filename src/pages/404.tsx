import { faHome } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { FC } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

const NotFound: FC = () => {
  return (
    <Layout>
      <Container className="py-20">
        <Heading>Page non trouvée</Heading>
        <div className="space-y-4 text-center">
          <div>La page que vous recherchez semble introuvable.</div>
          <div>
            <Link to="/">
              <Button icon={<FontAwesomeIcon icon={faHome} />} size="sm">
                Accueil
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
