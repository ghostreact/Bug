import { Button, Navbar, Text, Container } from "@nextui-org/react";
import { Layout } from "../Layout/Layout";
import { NextLogo } from "./Logo";
import NextLink from "next/link";


export default function NavbarComponent({children}) {
  return (
    <>
     <Layout>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Toggle showIn={"xs"} />
        <Navbar.Brand
          hideIn={"xs"}
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <NextLogo />
          <Text b color="inherit" hideIn="xs">
            Medicine Store
          </Text>
        </Navbar.Brand>

        {/* center */}

        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Container
            css={{
              dflex: "center",
            }}
          >
            <NextLink href="#">
              <Navbar.Link>Product</Navbar.Link>
            </NextLink>

            <Navbar.Content>
              <Container
                css={{
                  dflex: "center",
                }}
              >
                <NextLogo />
                {/* <Text b color="inherit" >
                  Medicine Store
                </Text> */}
              </Container>
            </Navbar.Content>

            <NextLink href="#">
              <Navbar.Link>Contact Us</Navbar.Link>
            </NextLink>
          </Container>
        </Navbar.Content>

        {/* Right */}
        <Navbar.Content
          css={{
            "@xs": {
              w: "auto",
              jc: "flex-end",
            },
          }}
        >
          <NextLink href="/about">
            <Navbar.Link
              css={{
                "&:hover": {
                  color: "$success",
                },
              }}
            >
              Login
            </Navbar.Link>
          </NextLink>

          <Button auto flat>
            <NextLink href="/signup">Sign Up</NextLink>
          </Button>
        </Navbar.Content>
      </Navbar>
    </Layout>
         {children} 
    </>
   
  );
}
