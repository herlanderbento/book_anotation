import { Container, Row, Col } from "reactstrap";
import { Background, CardItem, Input, Label, Text } from "./styles";
import { Button } from "../../components/Button";

import logo from '../../assets/book annotation.svg'

export function SignIn() {
  return (
    <Background>
      <Container>
        <Row>
          <Col lg="5" sm="6" md="6">
            <CardItem>
              <div className="title">
                <img src={logo} className="logo" alt="logo"/>
              </div>
              <form className="form">
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

                <Button className="mt-2">Entrar na plataforma</Button>
                <div className="separator">ou</div>
                <Button className="secondary">Entrar com o facebook</Button>
              </form>
            </CardItem>
          </Col>
          <Col lg="5" sm="6" md="6">
            <Text>
              <h1>
                Inicie a sua sessão e <br /> desfruta da aplicação
              </h1>
              <p>
                Aplicação desenvolvida pensando no agendamento e <br />{" "}
                dinamismo dos estudos, aproveite!
              </p>

              <Button className="mt-2 primary">Criar uma conta!</Button>
            </Text>
          </Col>
        </Row>
      </Container>
    </Background>
  );
}
