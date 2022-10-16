import { Button, Container, Grid } from "@nextui-org/react";
import Link from "next/link";
import NavbarComponent from "../Components/NavbarComponent";

export default function Product({ children }) {
  return (
    <>
      <Grid.Container>
        <Grid>
          <Container>
            <Button.Group vertical>
              <Button color={"error"}>
                <Link href={"./product/add"}>A</Link>
              </Button>
              <Button>B</Button>
              <Button>C</Button>
              <Button>D</Button>
            </Button.Group>
          </Container>
        </Grid>

        <Grid>
          <Container>
            <h1>this is manage products</h1>
            {children}
          </Container>
        </Grid>
      </Grid.Container>
    </>
  );
}
