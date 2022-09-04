import { IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";
import * as React from "react";
import "./Home.scss";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <IonPage id="home">
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Home</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
