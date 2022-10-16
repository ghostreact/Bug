import {
  Button,
  Col,
  Container,
  Grid,
  Input,
  Row,
  Spacer,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import NavbarComponent from "../Components/NavbarComponent";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    
      <Container gap={5} responsive>
        <Spacer y={6.5} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Container
            align="center"
            gap={5}
            css={{
              paddingBottom: "$3",
            }}
          >
            <Row>
              <Col>
                <Input
                  fullWidth
                  //status="default"
                  {...register("FirstName")}
                  aria-label="SignUp-Form"
                  //id="input-signup"
                  placeholder="FirstName"
                />
              </Col>
              <Spacer x={2} />

              <Col>
                <Input
                  fullWidth
                  //status="default"
                  {...register("LastName")}
                  aria-label="SignUp-Form"
                  //id="input-signup"
                  placeholder="LastName"
                />
              </Col>
            </Row>
          </Container>

          <Container gap={5}>
            <Row>
              <Col>
                <Input
                  css={{
                    paddingBottom: "$3",
                  }}
                  width="100%"
                  type={"email"}
                  status="default"
                  {...register("Email")}
                  aria-label="SignUp-Form"
                  //id="input-signup"
                  placeholder="E-mail"
                />

                <Input.Password
                  css={{
                    paddingBottom: "$3",
                  }}
                  fullWidth
                  clearable
                  type={"password"}
                  status="default"
                  {...register("PassWord")}
                  aria-label="SignUp-Form"
                  //id="input-signup"
                  placeholder="PassWord"
                />

                <Input.Password
                  css={{
                    paddingBottom: "$3",
                  }}
                  fullWidth
                  clearable
                  type={"password"}
                  status="default"
                  {...register("Confirm-PassWord")}
                  aria-label="SignUp-Form"
                  //id="input-signup"
                  placeholder="Confirm-PassWord"
                />
              </Col>
            </Row>
          </Container>

          <Container gap={5}>
            <Grid css={{ paddingBottom: "$3" }}>
              <Button
                type={"submit"}
                css={{
                  width: "100%",
                }}
              >
                Submit
              </Button>
            </Grid>

            <Grid>
              <Button
                color={"error"}
                css={{
                  width: "100%",
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Container>
        </form>
      </Container>
    
  );
};

export default SignUp;
