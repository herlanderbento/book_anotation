import { Container, Row, Col } from "reactstrap";
import { Background, CardItem, Input, Label, Text } from "./styles";
import { Button } from "../../components/Button";
import { FaArrowLeft } from "react-icons/fa";

import logo from "../../assets/book annotation.svg";

export function SignUp() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="5" sm="6" md="6">
            <CardItem>
              <div className="title">
                <img src={logo} className="logo" alt="logo" />
              </div>
              <form className="form">
                <div className="form-group">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="exemple@gmail.com"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="email">Seu Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@gmail.com"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="password">Sua palavra passe</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="............."
                    className="form-control"
                  />
                </div>

                {/* <div className="form-group">
                  <Label htmlFor="password">Confirma palavra passe</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="............."
                    className="form-control"
                  />
                </div> */}

                <Button className="mt-2">Criar conta</Button>
              </form>
            </CardItem>
          </Col>
          <Col lg="5" sm="6" md="6">
            <Text>
              <h1>
                Criar uma conta na <br />
                plataforma
              </h1>
              <p>
                Cria uma conta para desfrutar das <br /> funcionalidades que
                aplicação oferece.
              </p>

              <div className="cta">
                <FaArrowLeft color="#fff" />
                <Button className="mt-2 ml-4 primary">Criar uma conta!</Button>
              </div>
            </Text>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}
