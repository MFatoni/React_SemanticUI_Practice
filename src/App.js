import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Grid,
  Container,
  Divider,
  Flag,
  Header,
  Image,
  Icon,
  Input,
  Label
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container textAlign="left">Kiri</Container>
        <Container textAlign="right">kanan</Container>
        <Container textAlign="center">tengah</Container>
        <Container textAlign="justified">kiri kanan</Container>
        <Divider horizontal>BATAS</Divider>
        <Grid container columns={3}>
          <Grid.Column>
            <h1>Selamat Datang React Semantic UI</h1>
            <Button primary>Button Pertama</Button>
            <Button secondary>Button Kedua</Button>
            <Button basic color="red">
              Button Kedua
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Flag name="id" />
            <Flag name="indonesia" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" color="red">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
              Mohammad Fatoni
            </Header>
          </Grid.Column>
        </Grid>
        <Container textAlign="center">
          <Icon name="spinner" size="big" loading />
        </Container>
        <Image
          src="https://www.google.co.id/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
          size="tiny"
          href="https://google.com"
          target="_blank"
        />
        <Input type="text" placeholder="search" icon={<Icon name="search" />} />
        <Label pointing="left">Mesin Pencarian Google</Label>
      </div>
    );
  }
}

export default App;
